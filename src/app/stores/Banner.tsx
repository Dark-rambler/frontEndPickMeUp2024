"use client";

import { labels } from "../constants/labels";

export const BannerStore = () => {
  return (
    <div className=" w-full md:h-[350px] h-[380px]  rounded-2xl bg-banner-color  z-0 bg-cover bg-center bg-no-repeat filter ">
      <div className="flex flex-col-reverse md:flex-row md:items-center h-full md:ms-8 md:justify-between">
        <h1 className="lg:text-5xl md:text-4xl text-2xl px-2 md:px-0 pb-2 banner-font  text-secondary md:w-1/3  text-center ">
          {labels.legends.storeLegend}
        </h1>
        <div
          className="md:w-2/3 w-full h-full bg-cover md:bg-auto bg-no-repeat filter"
          style={{
            backgroundPosition: "calc(100% ) 70%",
            backgroundImage: "url('../../common/images/croasant.png')",
          }}
        ></div>
      </div>
    </div>
  );
};
