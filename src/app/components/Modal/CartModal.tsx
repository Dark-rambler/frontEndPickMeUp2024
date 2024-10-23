"use Client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyModal from "./Index";
import { CartState } from "@/lib/features/cart/cartSlice";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "@/lib/features/cart/cartSlice";
import { Badge, Button } from "@nextui-org/react";
import { IconSelector } from "../icons/Index";
import { labels } from "@/app/constants/labels";

interface CartModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
const CartModal = ({ isOpen, onOpenChange }: CartModalProps) => {
  const products: CartState = useSelector((state: any) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <MyModal showButtons={false}  isOpen={isOpen} onOpenChange={onOpenChange} title="Carrito">
      <div>
        <ul>
          {products?.items?.map((product) => (
            <div 
              className=" mb-2 flex rounded-md border shadow-lg p-2"
              key={product.id}>
              <img
                className="w-28 rounded-md"
                src={
                  product.image
                    ? product.image
                    : "https://via.placeholder.com/150"
                } alt=""/>

              <div className="ml-2 mt-2">
                <li>{product.name}</li>
                <li>{product.price} Bs</li>
              </div>
              <div className="flex ml-auto h-10 items-center  my-auto">
                <div
                  className="border rounded-full w-9 pb-1  hover:cursor-pointer shadow-md text-2xl text-center"
                  onClick={() => dispatch(decreaseQuantity(product.id))}>
                  -
                </div>
                <div className="w-8 text-center">{product.quantity}</div>
                <div
                  className="border rounded-full w-9 pb-1 hover:cursor-pointer shadow-md text-2xl text-center"
                  onClick={() => dispatch(increaseQuantity(product.id))}>
                  +
                </div>
              </div>
              <div onClick={ ()=>dispatch( removeProduct(product.id))}>
                <IconSelector
                name="trash"
                color="white"
                customClassName="cursor-pointer rounded-full w-6 h-6 -mt-2 -mr-2"/>
              </div>
            </div>
          ))}
          
        </ul>
        {products.totalProducts === 0 ? (
          <div className="flex justify-center">
            <h1>{labels.app.emptyCart}</h1>
          </div>
        ) : (
          <div className="flex justify-between border h-11 bg-green-500 text-white rounded-full shadow-lg ">
            <div className="flex items-center justify-around ms-4">
              <h1>{labels.app.totalPurchase}</h1>
              <h2 className="ms-6">{products.totalProductsPrice} Bs</h2>

            </div>
            <button className=" rounded-e-full  px-3 hover:bg-green-600 hover:transition-all  ">
              {labels.buttons.next}
            </button>
          </div>
        )}
      </div>
    </MyModal>
  );
};

export default CartModal;
