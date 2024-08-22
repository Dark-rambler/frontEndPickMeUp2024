"use client";
import React, { useEffect, useState } from "react";
import { BannerStore } from "../components/Banner/Index";
import { NavStores } from "./NavStores";
import { CardItem } from "../components/cards/CardItem";
import { StoreInterface } from "../interfaces/Store.interfaces";
import useApiClient from "../utils/apiClient";
import { labels } from "../constants/labels";

export default function stores() {
  const { get } = useApiClient();
  const [data, setData] = useState<StoreInterface[]>();

  const fetchData = async () => {
      const responseData = await get('/company/search');
      setData(responseData);
  };

  useEffect(() => {  
    fetchData();
  }, []);

  return (
    <div className=" px-9">
      <div className=" flex justify-center ">
        <BannerStore 
        image="../../common/images/croasant.png"
        description={labels.legends.storeLegend}
        heigth= { "350px " }
        responsiveHeight={"380px"}
        color="banner-color"
        />
      </div>
      <div>
        <NavStores />
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-3">
        {data?.map((store, index) => (
          <CardItem
            key={index}
            id={store.id}
            name={store.name}
            description={store.description}
            address={store.address}
            phone={store.phone}
            imageUrl={store.imageUrl}
            like={store.like}
            type={store.type}
          />
        ))
        }
      </div>
    </div>
  );
}
