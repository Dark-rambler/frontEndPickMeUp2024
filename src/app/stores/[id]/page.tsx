"use client";

import { StoreInterface } from "@/app/interfaces/Store.interfaces";
import useApiClient from "@/app/utils/apiClient";
import { useEffect, useState } from "react";
import { BannerStore } from "../../components/Banner/Index";

export default function Page({ params }: { params: { id: string } }) {
  const { get } = useApiClient();
  const [store, setStore] = useState<StoreInterface>();
  const fetchData = async () => {
    const response = await get(`/company/${params.id}`);
    setStore(response);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BannerStore
        title={store?.name}
        image={store?.imageUrl as string}
        height={"200px"}
        responsiveHeight={"200px"}
        color="banner-color"
        schedule={store?.schedule}
        address={store?.address}
      />

      <h1>{store?.name}</h1>
      <p>{store?.description}</p>
      <p>{store?.address}</p>
      <p>{store?.phone}</p>
      <p>{store?.email}</p>
      <p>{store?.imageUrl}</p>
      <p>{store?.like}</p>
      <p>{store?.type}</p>
      <p>{store?.website}</p>
      <p>{store?.schedule}</p>
    </div>
  );
}
