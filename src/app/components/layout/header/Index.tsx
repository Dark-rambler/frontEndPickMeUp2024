import React from "react";
import { IconSelector } from "../../icons/Index";
import { labels as titles } from "@/constants/labels";
export const Header = () => {
  const labels = titles;
  return (
    <div className="">
      <div className="relative rounded-xl p-4 flex bg-secondary">
        <span
          className="w-14 h-14 p-4
         bg-white border-tertiary shadow-tertiary 
          shadow-lg rounded-full cursor-pointer
          hover:scale-110 transition-all animation-duration-150"
        >
          <IconSelector name="menuBar" />
        </span>

        <div className=" flex flex-row-reverse p-4 w-full">
          <span className="flex">
            <IconSelector name="user" />
            <h2 className="text-color-menu">{labels.nav.myAccount}</h2>
          </span>
        </div>
      </div>
    </div>
  );
};
