import React from "react";
import { Header } from "../header/Index";
import { Footer } from "../footer/Index";
import { headerProps } from "@/app/interfaces/layout.interface";
interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  const options: headerProps[] = [
    {
      icon: "user",
      link: "/",
      label: "Home",
      hover: true,
    },

    {
      icon: "store",
      link: "/stores",
      label: "Tiendas",
    },
    {
      icon: "product",
      link: "/products",
      label: "Productos",
    },
    {
      icon: "arrowLeft",
      link: "/register",
      label: " Ingresar",
    } 
  ];

  return (
    <div className="bg-white p-10">
      <div
        className="inset-0 z-0 bg-cover bg-center bg-no-repeat filter blur-sm fixed"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/515373062/vector/food-seamless-background.jpg?s=612x612&w=0&k=20&c=hexa_lBms2zsFxEHASUeYhNu17i8JfV3TGOoDark-tk=')",
        }}
      ></div>
      <div className="px-14 relative z-10 h-screen ">
        <div className=" h-full rounded-md  ">
          <div className="h-full flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};
