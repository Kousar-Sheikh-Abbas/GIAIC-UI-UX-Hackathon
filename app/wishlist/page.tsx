"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const sanityClient = createClient({
  projectId: "z0kuquo4",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source).url();

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  return (
    <div className="bg-black text-orange-500 p-4">
      <h1 className="text-5xl text-center font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item, index) => (
          <div key={index} className="bg-white mx-5 rounded-lg shadow-lg text-center">
            <img
              src={urlFor(item.image)}
              alt={item.name}
              className="w-full h-50 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-sm text-black">{item.category}</p>
            <p className="mt-2">
              <span className="text-red-500 font-bold">${item.price}</span>
            </p>
            <p className="mt-2 text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
