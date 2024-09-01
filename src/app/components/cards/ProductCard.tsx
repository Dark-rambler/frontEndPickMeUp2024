import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardFooter, Image, Button, Tooltip } from "@nextui-org/react";
import { IconSelector } from "../icons/Index";
import {
  productInterface,
  StoreInterface,
} from "@/app/interfaces/Store.interfaces";
import { useRouter } from "next/navigation";
import { get } from "react-hook-form";
import { addProduct } from "@/lib/features/cart/cartSlice";

export const CardProduct = ({
  id,
  name,
  description,
  imageUrl,
  price,
  quantity,
  storeId,
  like,
  category,
}: productInterface) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onPress = () => {
    console.log("add product");
    dispatch(addProduct(id));
  };
  return (
    <div className="h-80 ">
      <Card isFooterBlurred radius="lg" className="border-none h-full">
        <Image
          alt="Product image"
          className="cursor-pointer object-cover h-full hover:scale-105 transition-all duration-500"
          removeWrapper
          src={imageUrl}
        />
        <CardFooter className="grid grid-cols-3 min-h-[6rem]  gap-2 bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 group">
          <div className="flex flex-col col-start-1 col-end-3">
            <h4 className="text-text-color font-bold text-xl ">{name}</h4>
            <p
              className={`text-base text-text-colorpb-1 ${"group-hover:line-clamp-none"} line-clamp-2`}
            >
              {description}
            </p>
            <div className="flex">
              <p className=" bg-banner-color px-4 py-1 text-sm shadow-md mt-2 rounded-full">
                {category}
              </p>
            </div>
          </div>
          <div className="h-full flex justify-between flex-col-reverse py-2 items-center me-2">
            <div>
              <p className="text-text-color font-bold text-md "> {price} Bs</p>
            </div>
            <div data-tooltip-target="tooltip-default">
              <Tooltip content="Agregar al carrito">
                <Button
                  onClick={() => onPress()}
                  className="w-4"
                  color="success"
                >
                  <IconSelector
                    customClassName="cursor-pointer duration-100 fill-icons-primary "
                    name="addCart"
                  />
                </Button>
              </Tooltip>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
