import { productInterface } from '@/app/interfaces/Store.interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    items: productInterface[];
    totalProducts: number;
    totalProductsPrice: number;
}

const initialState: CartState = {
    items: [],
    totalProducts: 0,
    totalProductsPrice: 0
}

const getTotalProductsPrice = (state: CartState, items: productInterface) => state.totalProductsPrice + items.price;

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state: CartState, action: PayloadAction<productInterface>) => {
            state.totalProducts += 1
            state.totalProductsPrice = getTotalProductsPrice(state, action.payload);
            if (state.items.find((product) => product.id === action.payload.id)) {
                state.items.map((product) => {
                    if (product.id === action.payload.id) {
                        product.quantity += 1
                    }
                })
            } else {
                state.items.push(action.payload)
                action.payload.quantity = 1
            }
        },
        removeProduct: (state: CartState, action: PayloadAction<number>) => {
            const index = state.items.findIndex((product) => product.id === action.payload)
            state.totalProducts -= state.items[index].quantity
            state.totalProductsPrice -= state.items[index].price * state.items[index].quantity
            state.items.splice(index, 1)
        },
        increaseQuantity: (state: CartState, action: PayloadAction<number>) => {
            const index = state.items.findIndex((product) => product.id === action.payload)
            state.items[index].quantity += 1
            state.totalProducts += 1
            state.totalProductsPrice += state.items[index].price
        },
        decreaseQuantity: (state: CartState, action: PayloadAction<number>) => {
            const index = state.items.findIndex((product) => product.id === action.payload)
            state.items[index].quantity -= 1
            state.totalProducts -= 1
            state.totalProductsPrice -= state.items[index].price
            if (state.items[index].quantity === 0) {
                state.items.splice(index, 1)
            }
        },
        clearCart: (state: CartState) => {
            state.items = []
            state.totalProducts = 0
            state.totalProductsPrice = 0
        }

    }
})
export const {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions
