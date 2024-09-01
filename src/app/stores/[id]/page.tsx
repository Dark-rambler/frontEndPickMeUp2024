"use client";

import { productInterface, StoreInterface } from "@/app/interfaces/Store.interfaces";
import useApiClient from "@/app/utils/apiClient";
import { useEffect, useState } from "react";
import { BannerStore } from "../../components/Banner/Index";
import { NavStores } from "../../components/navbar/Index";
import { navBarInterface } from "@/app/interfaces/Layout.interface";
import { labels } from "@/app/constants/labels";
import { CardProduct } from "@/app/components/cards/ProductCard";

export default function Page({ params }: { params: { id: string } }) {
  const { get } = useApiClient();

  const [store, setStore] = useState<StoreInterface>();
  const [products, setProducts] = useState<productInterface[]>([]);
  
  const fetchData = async () => {
    const response = await get(`/store/${params.id}`);
    setStore(response);
    console.log(response);
  };

  const fetchProducts = async () => {
    // const response = await get(`/product/search`);
    setProducts(productsStore);
    // console.log(response);
  }

  useEffect(() => {
    fetchData();
    fetchProducts();
  }, []);

  const productsStore:productInterface[] = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripcion del producto 1",
      price: 100,
      imageUrl: "https://crehana-blog.imgix.net/media/filer_public/6b/70/6b7020e2-507c-4110-b5dc-1dc9143cb5e9/postres_de_masa_de_manga.jpg?auto=format&q=50",
      like: false,
      category: "Producto",
      quantity: 1,
      storeId: 1,
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripcion del producto 2",
      price: 200,
      imageUrl: "https://crehana-blog.imgix.net/media/filer_public/fd/fa/fdfae1a6-7e61-4680-a06f-94c630691bd9/postre_de_masa_ligera.jpg?auto=format&q=50",
      like: false,
      quantity: 3,
      category: "Producto",
      storeId: 1,
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripcion del producto 3",
      price: 300,
      imageUrl: "https://www.recetasnestle.com.co/sites/default/files/inline-images/tipos-masa-batida-reposteria-pastel.jpg",
      like: false,
      category: "Producto",
      quantity: 2,
      storeId: 1,}]

  const menuStore: navBarInterface[] = [
    {
      id: 1,
      label: "Productos",
      icon: "product",
    },
    {
      id: 2,
      label: "Promociones",
      icon: "coffe",
    },
    {
      id: 3,
      label: "Bolsas Sorpresa",
      icon: "party",
    },
  ];

  return (
    <div>
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
      </div>
      <div className="px-8">
        <NavStores navBar={menuStore} tittle={labels.sections.products} />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 p-8">
          {products.map((product:productInterface, index:number) => (
            <div key={index}>
              <CardProduct
                id={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                price={product.price}
                storeId={product.storeId}
                like={product.like}
                category={product.category}
                quantity={product.quantity}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
