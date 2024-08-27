"use client";

import React from "react";
import { IconSelector } from "../../icons/Index";
import { labels as titles } from "@/app/constants/labels";
import { headerProps } from "@/app/interfaces/Layout.interface";
import { CustomLogo } from "../../icons/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Badge, useDisclosure } from "@nextui-org/react";
import MyModal from "../../Modal/Index";
import CartModal from "../../Modal/CartModal";

export interface interfaceOptionsProps {
  menu: headerProps[];
}

export const Header = ({ menu }: interfaceOptionsProps) => {
  const pathName = usePathname();
  const {isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="grid grid-cols-3 bg-white justify-between items-center border-b-1 border-secondary-50">
      <div className="flex items-center space-x-4">
        <div className="relative rounded-xl p-2 md:hidden">
          <span className="w-14 h-14 p-4 bg-white border-tertiary shadow-tertiary shadow-lg rounded-full hover:scale-110 transition-all duration-150">
            <IconSelector name="menuBar" customClassName="fill-icons-primary" />
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {menu.map((item, index) => (
            <div
              className={`px-4 transition-colors duration-500 group cursor-pointer h-full flex items-center ${
                pathName === item.link ? "text-secondary/60" : ""
              }`}
              key={index}
            >
              <Link href={item.link}>
                <span className="flex items-center justify-center relative">
                  <h2
                    className={`relative ${
                      pathName === item.link
                        ? "text-secondary/60 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary/60"
                        : "text-secondary"
                    } group-hover:text-secondary`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 w-0 h-[2px] bg-secondary/60 transition-all duration-500 group-hover:w-full group-hover:left-0 ${
                        pathName === item.link ? "left-0" : ""
                      }`}
                    ></span>
                  </h2>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow flex justify-center">
        <CustomLogo name="logo" />
      </div>

      <div className="flex items-center space-x-4 justify-end pe-4">
        <a href="https://instagram.com">
          <IconSelector
            name="instagram"
            customClassName="fill-icons-primary hover:fill-icons-secondary"
          />
        </a>
        <a href="https://facebook.com">
          <IconSelector name="facebook" customClassName="fill-icons-primary" />
        </a>
        <Badge content="5" color="primary" variant="solid">
          <span
            onClick={() => onOpen()}
            className="rounded-full border-2 p-1 hover:scale-110 cursor-pointer transition-all animation-duration-300 "
          >
            <IconSelector
              name="cart"
              customClassName=" fill-icons-primary rounded-full  "
            />
          </span>
        </Badge>
      </div>
      <CartModal
       isOpen={isOpen}
       onOpenChange={onOpenChange}
      />
    </div>
  );
};
