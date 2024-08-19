import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { IconSelector } from "../icons/Index";
import { StoreInterface } from "@/app/interfaces/Store.interfaces";

export const CardItem = ({
  name,
  description,
  address,
  phone,
  image='https://saborgourmet.com/wp-content/uploads/pastelerias-favoritas-de-madrid-cientotreintagrados.jpg',
  like,
  type
}: StoreInterface) => {
  return (
    <div className="h-80 ">
      <Card isFooterBlurred radius="lg" className="border-none h-full">
        <Image
          alt="Product image"
          className="cursor-pointer object-cover h-full hover:scale-105 transition-all duration-500"
          removeWrapper
          src={image}
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
              <p className=" bg-banner-color px-4 py-1 text-sm shadow-md mt-2 rounded-full">{type}</p>
            </div>
          </div>
          <div className="h-full flex flex-row-reverse me-2">
            <IconSelector
              customClassName="cursor-pointer duration-100 "
              name={like ? "heartFill" : "heart"}
              color={like ? "red" : ""}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
