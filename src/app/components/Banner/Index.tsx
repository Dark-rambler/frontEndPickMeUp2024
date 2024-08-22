"use client";

import { use, useEffect } from "react";
import { labels } from "../../constants/labels";
import { BannerProps } from "../../interfaces/Layout.interface";

export const BannerStore = ({
  title,
  description,
  image,
  color,
  height = "350px",
  responsiveHeight = "380px",
  schedule,
  address,
}: BannerProps) => {
  useEffect(() => {
    console.log(height);
  }, []);
  return (
    <div
      className={`w-full rounded-2xl bg-${color} z-0 bg-cover bg-center bg-no-repeat filter`}
      style={{ height: height, minHeight: responsiveHeight }}
    >
      <div className="flex flex-col-reverse md:flex-row md:items-center h-full md:ms-8 md:justify-between">
        {title ? (
          <div className="md:w-1/3 md:px-0 px-2">
            <h2 className="text-primary lg:text-5xl md:text-4xl text-2xl px-2 md:px-0 pb-2 banner-font font-bold">
              {title}
            </h2>
            <p className="text-primary text-sm">
              <strong className="me-2">{labels.app.schedules}</strong>{" "}
              {schedule}
            </p>
            <p className="text-primary text-sm">
              {" "}
              <strong className="me-2">{labels.app.address}</strong>
              {address}
            </p>
          </div>
        ) : (
          <h1 className="lg:text-5xl md:text-4xl text-2xl px-2 md:px-0 pb-2 banner-font  text-secondary md:w-1/3  text-center ">
            {description}
          </h1>
        )}
        <div
          className="md:w-2/3 w-full h-full bg-cover md:bg-auto bg-no-repeat filter"
          style={{
            backgroundPosition: "calc(100% ) 70%",
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
    </div>
  );
};
