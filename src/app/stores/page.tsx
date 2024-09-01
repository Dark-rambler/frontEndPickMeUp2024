"use client";
import React, { useEffect, useState } from "react";
import { BannerStore } from "../components/Banner/Index";
import { NavStores } from "../components/navbar/Index";
import { CardItem } from "../components/cards/CardItem";
import { StoreInterface } from "../interfaces/Store.interfaces";
import useApiClient from "../utils/apiClient";
import { labels } from "../constants/labels";
import { navBarInterface } from "../interfaces/layout.interface";

export default function stores() {
  const { get } = useApiClient();
  const [data, setData] = useState<StoreInterface[]>();

  const fetchData = async () => {
      // const responseData = await get('/store/search');
      setData(products);
  };
  const products:StoreInterface[] = [
    {
      id: 1,
      name: "Croasant",
      description: "Delicioso croasant de chocolate",
      address: "Calle 123 # 123",
      phone: "123456789",
      imageUrl: "../../common/images/croasant.png",
      like: true,
      type: "Saludable",
    },
    {
      id: 2,
      name: "Café",
      description: "Delicioso café",
      address: "Calle 123 # 123",
      phone: "123456789",
      imageUrl: "../../common/images/coffe.png",
      like: true,
      type: "Cafeterías",
    },
    {
      id: 3,
      name: "Cerveza",
      description: "Deliciosa cerveza",
      address: "Calle 123 # 123",
      phone: "123456789",
      imageUrl: "../../common/images/beer.png",
      like: true,
      type: "Adultos",
    },
  ];

  useEffect(() => {  
    fetchData();
  }, []);

  const typeStores:navBarInterface[] = [
    {
      id: 1,
      label: "Saludable",
      icon: "user",
    },
    {
      id: 2,
      label: "Festivo",
      icon: "party",
    },
    {
      id: 3,
      label: "Cafeterías",
      icon: "coffe",
    },
    {
      id: 4,
      label: "Adultos",
      icon: "user",
    },
  ];
  return (
    <div className=" px-9">
      <div className=" flex justify-center ">
        <BannerStore 
        image="../../common/images/croasant.png"
        description={labels.legends.storeLegend}
        height= { "350px " }
        responsiveHeight={"380px"}
        color="banner-color"
        />
      </div>
      <div>
        <NavStores 
          navBar={typeStores}
          tittle={labels.sections.stores}
        />
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
