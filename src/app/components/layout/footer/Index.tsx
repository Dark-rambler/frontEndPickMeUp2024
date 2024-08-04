import { labels } from "@/app/constants/labels";
import React from "react";
import { CustomLogo } from "../../icons/Logo";
import { IconSelector } from "../../icons/Index";
import Link from "next/link";
import { interfaceOptionsProps } from "../header/Index";

export const Footer = ({ menu }: interfaceOptionsProps) => {
  return (
    <div className=" rounded-b-2xl p-4 mb-5 flex bg-white justify-between">
      <div className=" flex flex-col justify-center items-center ">
        <CustomLogo name="logo"></CustomLogo>
        <div className="text-center ">
          <h2 className="text-tittles-color text-3xl me-2 font-extrabold tittle-font text-center  ">
            {labels.nav.bussinesName}
          </h2>
          <small className="text-xs font-semibold -mt-3 tittle-font">
            {labels.nav.slogan}
          </small>
        </div>
      </div>
      <div className=" items-center justify-center h-10 mt-2 pe-7">
        {menu.map((item, index) => (
          <div
            className=" px-4 w-full hover:bg-secondary/50 rounded-md group cursor-pointer h-full flex items-center "
            key={index}
          >
            <Link href={"#"} className=" ">
              <span className="flex items-center justify-center ">
                <IconSelector name={item.icon} customClassName="fill-gray-300" />
                <h2 className="text-color-menu group-hover:text-white ">
                  {item.label}
                </h2>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
