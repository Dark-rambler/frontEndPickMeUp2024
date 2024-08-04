"use client";

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
    },
  ];

  return (
    <div className="bg-white h-full z-10 py-2 ">
      <div className="  inset-0 z-0 bg-tertiary  fixed"></div>
      <div className="md:mx-14 mx-6 relative  z-10  ">
        <div className=" h-full rounded-md  ">
          <Header menu={options} />
          <div className="h-full bg-white">{children}</div>
          <Footer menu={options} />
        </div>
      </div>
    </div>
  );
};
