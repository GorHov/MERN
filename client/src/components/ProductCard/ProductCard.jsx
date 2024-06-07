"use client";

import React from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import Image from "next/image";

export const revalidate = 3600;

export function ProductCard({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card cursor-pointer">
      <img
        // src={item.images[0]}
        src="/images/item.jpg"
        alt={item?.title}
        className="w-full"
      />
      <h1 className="title text-gray-800 tracking-wide">Garden of Roses</h1>
      <div className="btn from-left w-full">
        <div className="flex justify-between items-center p-5">
          <p className="text-base tracking-wide w-1/3 text-gray-800">
            47000 AMD
          </p>
          <div className="flex w-1/4 justify-evenly">
          <Image
            src="assets/svg/heart.svg"
            width={24}
            height={24}
            alt="heart"
            className="mr-4"
          />
          <Image
            src="assets/svg/shopping_cart.svg"
            width={24}
            height={24}
            alt="Shopping Cart"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
