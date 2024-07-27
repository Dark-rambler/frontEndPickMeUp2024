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
    <div className="bg-white py-2">
      <div
        className="inset-0 z-0 bg-cover bg-center bg-no-repeat filter blur-md fixed"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/1d/6a/a3/1d6aa30936a12cd3b40a2cb184d2c952.jpg')",
        }}
      ></div>
      <div className="px-14 relative z-10 h-screen ">
        <div className=" h-full rounded-md  ">
          <Header menu={options} />
          <div className="h-5/6 bg-white/30 z-50 ">{children}</div>
          <Footer menu={options} />
        </div>
      </div>
    </div>
  );
};
