import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface CartItem {
    id: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalProducts: number;
}

const initialState: CartState = {
    items: [],
    totalProducts: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state: CartState, action: PayloadAction<number>) => {
            console.log(action.payload);
            const id  = action.payload;
            const existingProduct = state.items.map((item) => item.id).indexOf(id);
            if (existingProduct !== -1) {
                state.items[existingProduct].quantity += 1;
            } else {
                state.items.push({ id, quantity: 1 });
            }
            state.totalProducts += 1;
            console.log(state.totalProducts);
        },
    }
})
export const {
    addProduct
} = cartSlice.actions
