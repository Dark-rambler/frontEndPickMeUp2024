"use client";

import Link from "next/link";
import { IconNameType, IconSelector } from "../icons/Index";
import { labels } from "../../constants/labels";
import InputComponent from "../intput/Index";
import { navBarInterface } from "../../interfaces/Layout.interface";

export const NavStores = ({ navBar, tittle }: { navBar: navBarInterface[],tittle:string }) => {

  return (
    <section className="mt-12 ">
      <div className="flex sm:flex-row flex-col justify-between w-full">
        <h3 className="font-bold text-2xl text-tittles-color ">
          {tittle}
        </h3>
        <div>
          <InputComponent
            name="searchStore"
            placeholder={labels.placeholders.searchStore}
            className=" rounded md:px-3 md:py-1 py-3"
            variant="bordered"
            endContent={
              <IconSelector
                name="search"
                customClassName="fill-icons-primary"
              />
            }
          />
        </div>
      </div>
      <div className=" flex flex-wrap mt-2 items-center md:justify-start justify-center">
        {navBar.map((item:navBarInterface, index:number) => (
          <div
            className={`p-4 mt-6  hover:bg-primary transition-all
               duration-500 group cursor-pointer h-full flex items-center justify-center rounded`}
            key={index}
          >
            <span className="flex items-center justify-center ">
              <IconSelector
                name={item.icon as IconNameType}
                customClassName={`${"fill-icons-primary"} me-1 group-hover:fill-gray-300`}
              />
              <h2
                className={`${"text-secondary group-hover:text-gray-300/80"} `}
              >
                {item.label}
              </h2>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
