"use client";

import Link from "next/link";
import { IconNameType, IconSelector } from "../components/icons/Index";
import { labels } from "../constants/labels";
import InputComponent from "../components/intput/Index";

export const NavStores = () => {
  const typeStores = [
    {
      id: 1,
      name: "Saludable",
      icon: "user",
    },
    {
      id: 2,
      name: "Festivo",
      icon: "party",
    },
    {
      id: 3,
      name: "Cafeterías",
      icon: "coffe",
    },
    {
      id: 4,
      name: "Adultos",
      icon: "user",
    },
  ];
  return (
    <section className="mt-12 ">
      <div className="flex sm:flex-row flex-col justify-between w-full">
        <h3 className="font-bold text-2xl text-tittles-color ">{labels.sections.restaurants}</h3>
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
        {typeStores.map((item, index) => (
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
                {item.name}
              </h2>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
