"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { allProducts } from "../constants/index";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ProductSectionProps {
  id: string | number;
}

export default function ProductSection({ id }: ProductSectionProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { increaseCartQuantity } = useShoppingCart();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="order-2 md:order-1 flex md:flex-col gap-4"></div>

        <div className="w-1/2 flex items-center justify-center">
          <img
            src={product.image}
            className="aspect-[4/5] object-cover w-full"
          />
        </div>

        <div className="md:w-1/2">
          <nav className="flex items-center gap-2 text-sm mb-6 text-orange-400">
            GLAMIFY
          </nav>
          <h1 className="text-3xl font-inter tracking-wide mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} Comment)
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">SELECT SIZE</span>
              <button className="text-sm text-gray-600 underline">
                SIZE GUIDE
              </button>
            </div>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center border rounded-md ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <span className="text-3xl font-inter">
              R${product.price.toLocaleString()}
            </span>
          </div>
          <div className="mb-6">
            <span className="text-sm font-medium block mb-2">
              COLOURS AVAILABLE
            </span>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => increaseCartQuantity(product.id)}
                className="flex-1 bg-black text-white py-4 px-6"
              >
                ADD TO CART
              </button>
            </div>
            <button className="w-full border border-black py-4">BUY NOW</button>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center border">
                ✓
              </div>
              <span className="text-sm">SECURE PAYMENT</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center border">
                ✓
              </div>
              <span className="text-sm">SIZE & FIT</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center border">
                ✓
              </div>
              <span className="text-sm">FREE SHIPPING</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center border">
                ✓
              </div>
              <span className="text-sm">FREE SHIPPING & RETURNS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
