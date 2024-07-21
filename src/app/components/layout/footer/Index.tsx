import { labels as tittles } from "@/app/constants/labels";
import React from "react";
import { CustomLogo } from "../../icons/Logo";
import { IconSelector } from "../../icons/Index";
import Link from "next/link";
import { interfaceOptionsProps } from "../header/Index";

export const Footer = ({ menu }: interfaceOptionsProps) => {
  return   <div className="relative rounded-b-2xl p-4 flex bg-white/30 justify-between">
  <div className="flex items-center">
    <h2 className="text-tittles-color text-3xl me-2 font-extrabold tittle-font text-center  ">
      {tittles.nav.bussinesName}
    </h2>
    <CustomLogo name="logo"></CustomLogo>
  </div>
  <div className="relative rounded-xl p-4 flex bg-secondary md:hidden">
    <span
      className="w-14 h-14 p-4 
     bg-white border-tertiary shadow-tertiary 
      shadow-lg rounded-full 
      hover:scale-110 transition-all animation-duration-150"
    >
      <IconSelector name="menuBar" />
    </span>
    <h1 className="text-color-menu text-2xl font-bold">
      {tittles.nav.home}
    </h1>
  </div>
  <div className="flex items-center justify-center h-10 mt-2">
    {menu.map((item, index) => (
      <div
        className=" px-4 w-full hover:bg-secondary group cursor-pointer h-full flex items-center rounded-full "
        key={index}
      >
        <Link href={"#"} className=" ">
          <span className="flex items-center justify-center ">
            <IconSelector name={item.icon} />
            <h2 className="text-color-menu group-hover:text-white ">
              {item.label}
            </h2>
          </span>
        </Link>
      </div>
    ))}
  </div>
</div>
};