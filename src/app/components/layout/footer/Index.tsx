import { labels } from "@/app/constants/labels";
import React from "react";
import { CustomLogo } from "../../icons/Logo";
import { usePathname } from "next/navigation";
import { IconSelector } from "../../icons/Index";
import Link from "next/link";
import { interfaceOptionsProps } from "../header/Index";

export const Footer = ({ menu }: interfaceOptionsProps) => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col bg-white p-8 border-t-1 border-secondary-50 mt-1">
      <div className="grid grid-cols-4">
        <div className="h-full">
          <CustomLogo name="logo" />
          <h2 className="text-secondary">Salvemos la comida</h2>
        </div>
        <div className="space-y-10 p-4">
          <h2 className="text-2xl text-left text-primary font-thin my-4">
            ¿Tienes alguna duda?
          </h2>
          <h2 className="text-secondary">Siempre estamos acá para ayudarte</h2>
          <span className="text-secondary hover:text-secondary/50 flex space-x-2 cursor-pointer">
            <IconSelector name="phone" customClassName="fill-icons-primary" />
            Contáctanos
          </span>
        </div>
        <div className="flex flex-col space-y-10 p-4">
          <h2 className="text-2xl text-left text-primary font-thin my-4">
            Síguenos en nuestras redes
          </h2>
          <div className="flex space-x-4 ">
            <a href="https://instagram.com">
              <IconSelector
                name="instagram"
                customClassName="text-gray-300 hover:text-white fill-icons-primary"
              />
            </a>
            <a href="https://facebook.com">
              <IconSelector
                name="facebook"
                customClassName="text-gray-300 hover:text-white fill-icons-primary"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col p-4">
          <h2 className="text-2xl text-left text-primary font-thin my-4">
            Sigue navegando
          </h2>
          {menu.map((item, index) => (
            <div
              className={`transition-colors duration-500 group cursor-pointer h-full flex ${
                pathName === item.link ? "text-secondary/60" : ""
              }`}
              key={index}
            >
              <Link href={item.link}>
                <span className="flex items-center justify-center relative">
                  <h2
                    className={`relative ${
                      pathName === item.link
                        ? "text-secondary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary/60"
                        : "text-secondary"
                    } group-hover:text-primary`}
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
    </div>
  );
};
