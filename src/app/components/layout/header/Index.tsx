"use client";

import React from "react";
import { IconSelector } from "../../icons/Index";
import { labels as titles } from "@/app/constants/labels";
import { headerProps } from "@/app/interfaces/layout.interface";
import { CustomLogo } from "../../icons/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export interface interfaceOptionsProps {
  menu: headerProps[];
}

export const Header = ({ menu }: interfaceOptionsProps) => {
  const labels = titles;
  const pathName = usePathname();

  return (
    <div className="relative rounded-t-2xl p-4 mt-5 flex bg-white/30 justify-between items-center">
      <div className="relative rounded-xl p-2 flex md:hidden">
        <span
          className="w-14 h-14 p-4 
         bg-white border-tertiary shadow-tertiary 
          shadow-lg rounded-full 
          hover:scale-110 transition-all animation-duration-150"
        >
          <IconSelector name="menuBar" />
        </span>
      </div>
      <div className="flex items-center cursor-pointer rounded-full">
        <CustomLogo name="logo"></CustomLogo>
      </div>

      <div className=" md:flex hidden items-center justify-center h-10 mt-2">
        {menu.map((item, index) => (
          <div
            className={`px-4 w-full hover:bg-primary transition-all
               duration-500 group cursor-pointer h-full flex items-center rounded-full ${
                 pathName === item.link && "bg-primary "
               }`}
            key={index}
          >
            <Link href={item.link}>
              <span className="flex items-center justify-center ">
                <IconSelector
                  name={item.icon}
                  customClassName={`${
                    pathName === item.link
                      ? "fill-gray-300"
                      : "fill-icons-primary"
                  } group-hover:fill-gray-300`}
                />
                <h2
                  className={`${
                    pathName === item.link
                      ? "text-gray-300/80"
                      : "text-white group-hover:text-gray-300/80"
                  } `}
                >
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
