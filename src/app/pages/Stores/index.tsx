import React from "react";
import { BannerStore } from "./Banner";
import { NavStores } from "./NavStores";

export default function Stores() {
  return (
    <div className="h-96 px-9">
      <div className="h-full flex justify-center ">
        <BannerStore />
      </div>
        <NavStores />
    </div>
  );
}