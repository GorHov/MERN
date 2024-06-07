"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "/public/images/main-3.jpg";
import { Header } from "./Header";
import { ProductCard } from "./ProductCard/ProductCard";

function Main() {
  const items = useSelector((state) => state.cart.items);
  const [product, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(items);
  }, [items]);

  return (
    <div className="mx-auto">
      <div className="h-screen w-full">
        <Header />
        <div
          className="h-4/5"
          style={{
            backgroundImage: `url('/images/main-2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="flex w-full  bg-white  items-center justify-center py-24">
        <div className="flex w-4/5 items-center justify-evenly">
          <div className="w-1/2 flex-column items-center">
            <h1 className="text-3xl">About Us</h1>
            <p className="w-3/4">
              Mon Amie flower&design shop was founded in Yerevan since 2002.
              Over the years, we have cooperated with large Armenian and
              international companies, we were honored to decorate a number of
              important events of national importance. Our events are
              characterized by elegance, attention to detail and high quality
              service. Our specialists regularly participate in international
              trainings and competitions. .
            </p>
          </div>
          <Image
            className="w-2/5"
            src="/images/flowers.jpg"
            height={270}
            width={445}
          />
        </div>
      </div>
      <div className="border-t-2 border-t-gray-200 w-full flex items-center justify-center flex-col">
        <h1 className="py-16 text-3xl">Our Seasonal Bestsellers</h1>
        <div className="w-4/5 flex grid-rows-3 gap-8 pb-16">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
      <div className="border-t-2 border-t-gray-200 w-full flex items-center justify-center flex-col py-40">
        
      </div>
      <div className="border-t-2 border-t-gray-200 w-full flex items-center justify-center flex-col py-40">
        
      </div>
      <div className="w-full h-96 bg-white"></div>
    </div>
  );
}

export default Main;
