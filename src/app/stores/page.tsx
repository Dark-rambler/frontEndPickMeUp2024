"use client";
import React from "react";
import { BannerStore } from "./Banner";
import { NavStores } from "./NavStores";
import { CardItem } from "../components/cards/CardItem";
import { StoreInterface } from "../interfaces/Store.interfaces";

export default function stores() {
  const stores : StoreInterface[] = [
    {
      name: "Magnolia's Bakery",
      description: "Calidad y sabor en cada bocado",
      address: "Direccion de la tienda 1",
      phone: "123456",
      image: "https://coconut.com.bo/wp-content/uploads/2024/01/pasteleria-coconut-2000x900-1.jpg",
      like:false,
      type:"Pastelería"
    },
    {
      name: "Hermanas Rositas",
      description: "Sientete como en casa",
      address: "Direccion de la tienda 2",
      phone: "123456",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a6/b4/ce/pasteleria-lyon.jpg?w=1200&h=-1&s=1",
      like:true,
      type:"Pastelería"

    },
    {
      name: "FunFit",
      description: "Ser saludable es delicioso",
      address: "Direccion de la tienda 3",
      phone: "123456",
      image: "https://saborgourmet.com/wp-content/uploads/pastelerias-favoritas-de-madrid-paenm.jpg",
      like:true,
      type:"Pastelería"
    },
    {
      name: "Cafetería CIENTOTREINTA",
      description: "Sabores que dan gusto",
      address: "Direccion de la tienda 4",
      phone: "123456",
      image: "https://saborgourmet.com/wp-content/uploads/pastelerias-favoritas-de-madrid-cientotreintagrados.jpg",
      like:true,
      type:"Cafetería"
    },
  ];


  return (
    <div className=" px-9">
      <div className=" flex justify-center ">
        <BannerStore />
      </div>
      <div>
        <NavStores />
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-3">
        {stores.map((store, index) => (
          <CardItem
            key={index}
            name={store.name}
            description={store.description}
            address={store.address}
            phone={store.phone}
            image={store.image}
            like={store.like}
            type={store.type}
          />
        ))
        }
      </div>
    </div>
  );
}
