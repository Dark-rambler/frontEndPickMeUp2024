"use client";

import Link from "next/link";
import { IconNameType, IconSelector } from "../components/icons/Index";
import { labels } from "../constants/labels";
import InputComponent from "../components/intput/Index";

export const NavStores = () => {
  const typeStores = [
    {
      id: 1,
      name: "Restaurante",
      icon: "user",
    },
    {
      id: 2,
      name: "Bar",
      icon: "user",
    },
    {
      id: 3,
      name: "Café",
      icon: "user",
    },
    {
      id: 4,
      name: "Fast Food",
      icon: "user",
    },
    {
      id: 5,
      name: "Comida Rápida",
      icon: "user",
    },
    {
      id: 6,
      name: "Comida Rápida",
      icon: "user",
    },
  ];
  return (
    <section className="mt-12 ">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-2xl text-tittles-color ">Restaurants</h3>
        <InputComponent
          name="searchStore"
          placeholder={labels.placeholders.searchStore}
          className=" rounded bg-white/70 px-3 py-1"
        />
      </div>
      <div className=" md:flex hidden items-center justify-center h-10 mt-2">
        {typeStores.map((item, index) => (
          <div
            className={`px-4 w-full hover:bg-primary transition-all
               duration-500 group cursor-pointer h-full flex items-center rounded-full`}
            key={index}
          >
              <span className="flex items-center justify-center ">
                <IconSelector
                  name={item.icon as IconNameType}
                  customClassName={`${
                    "fill-icons-primary"
                  } group-hover:fill-gray-300`}
                />
                <h2
                  className={`${
                "text-white group-hover:text-gray-300/80"
                  } `}
                >
                  {item.name}
                </h2>
              </span>
          </div>
        ))}
      </div>
    </section>
  );
};
