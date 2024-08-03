'use client';

import { labels } from "../constants/labels";

export const BannerStore = () => {
  return (
    <div className=" w-full  rounded-2xl bg-banner-color z-0 bg-cover bg-center bg-no-repeat filter ">
      <div className="flex items-center h-full ms-8 justify-between">
        <h1 className="text-5xl banner-font text-secondary w-1/3  text-center ">
          {labels.legends.storeLegend}
        </h1>
        <div
          className="w-1/3 h-full bg-no-repeat filter"
          style={{
            backgroundPosition: "calc(100% + 1rem) 70%",
            backgroundImage: "url('../../common/images/croasant.png')",
          }}
        ></div>
      </div>
    </div>
  );
};
