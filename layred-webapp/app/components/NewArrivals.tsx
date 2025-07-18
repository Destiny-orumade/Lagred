"use client";
import React from "react";
import Image from "next/image";
import { FaHeart, FaEye } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Ribbed Seamless Activewear Set",
    price: "$24.95",
    originalPrice: "$30.50",
    image: "/new1.webp",
    sale: true,
  },
  {
    id: 2,
    name: "Cropped Tank Top & High-Waisted Shorts",
    price: "$24.95",
    originalPrice: "$30.50",
    image: "/new2.webp",
    sale: true,
    soldOut: true,
  },
  {
    id: 3,
    name: "Oversized Graphic Tee Dress",
    price: "$70.22",
    image: "/new8.webp",
  },
  {
    id: 4,
    name: "Flowy Sleeveless Top & Shorts Set",
    price: "$24.95",
    image: "/new4.webp",
  },
  {
    id: 5,
    name: "Relaxed Fit Long-Sleeve Top",
    price: "$45.00",
    image: "/new3.webp",
  },
  {
    id: 6,
    name: "Ribbed Knit Cropped Tank Top",
    price: "$24.95",
    image: "/new6.webp",
  },
  {
    id: 7,
    name: "Floral Embroidered Ribbed Tank",
    price: "$35.00",
    image: "/new5.webp",
  },
  {
    id: 8,
    name: "Deep V-Neck Ribbed Long-Sleeve Top",
    price: "$45.00",
    originalPrice: "$50.00",
    image: "/new8.webp",
    sale: true,
  },
];

const NewArrivals = () => {
  return (
    <section className="px-4 md:px-10 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black">New Arrivals</h2>
        <a href="#" className="text-black underline text-sm font-medium">
          Show all latest products
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden bg-white border border-gray-100 rounded-md"
          >
            {/* Sale / Sold Out */}
            {product.sale && (
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                Sale
              </span>
            )}
            {product.soldOut && (
              <span className="absolute top-2 left-[3.5rem] bg-white text-black text-xs px-2 py-1 z-10">
                Sold out
              </span>
            )}

            {/* Image + Hover Elements */}
            <div className="relative w-full h-[420px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Vertical Right Icons on Hover */}
              <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-md hover:scale-105 transition">
                  <FaHeart className="text-black text-sm" />
                </button>
                <button className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-md hover:scale-105 transition">
                  <FaEye className="text-black text-sm" />
                </button>
              </div>


              <div className="absolute -bottom-3 w-full h-10 bg-black text-white text-center text-sm font-medium py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                Add To Cart
              </div>
            </div>


            <div className="mt-4 px-3 pb-4">
              <h3 className="text-base font-medium  text-black">
                {product.name}
              </h3>
              <div className="flex gap-2 items-center text-sm mt-1">
                <span className="text-black font-bold">{product.price}</span>
                {product.originalPrice && (
                  <span className="line-through text-gray-400">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
