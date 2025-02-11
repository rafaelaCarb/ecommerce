"use client";

import { useCallback, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Color, Product } from "../commons/product";
import { ProductService } from "../service/ProductService";

interface ProductSectionProps {
  id: string | number;
}

export default function ProductSection({ id }: ProductSectionProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { increaseCartQuantity } = useShoppingCart();
  const [showNot, setShowNot] = useState(false);
  const [product, setProduct] = useState<Product>();

  const fetchProduct = useCallback(async () => {
    const response = await new ProductService().findById(Number(id));
    setProduct(response.data);
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleClick = (id: number) => {
    increaseCartQuantity(id);
    setShowNot(true);
    const timer = setTimeout(() => setShowNot(false), 4000);
    return () => clearTimeout(timer);
  };

  const getColor = (color: Color) => {
    switch (color) {
      case Color.BLACK:
        return "#000000";
      case Color.WHITE:
        return "#FFFFFF";
      case Color.BLUE:
        return "#3B82F6";
      case Color.RED:
        return "#FF0000";
      case Color.GREEN:
        return "#008000";
      case Color.YELLOW:
        return "#FFFF00";
      default:
        return "";
    }
  };

  return (
    <>
      {product && (
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
                      className={`w-4 h-4 ${i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({87} Comentários)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">SELECIONAR TAMANHO</span>
                  <button className="text-sm text-gray-600 underline">
                    GUIA TAMANHO
                  </button>
                </div>
                <div className="flex gap-3">
                  <button
                    key={product.size}
                    onClick={() => setSelectedSize(product.size)}
                    className={`w-10 h-10 flex items-center justify-center border rounded-md ${selectedSize === product.size
                      ? "border-black bg-black text-white"
                      : "border-gray-200"
                      }`}
                  >
                    {product.size}
                  </button>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-3xl font-inter">
                  R${product.price.toLocaleString()}
                </span>
              </div>
              <div className="mb-6">
                <span className="text-sm font-medium block mb-2">
                  CORES DISPONÍVEIS
                </span>
                <div className="flex gap-2">
                  <button
                    key={product.color}
                    className="w-8 h-8 rounded-full border border-gray-200"
                    style={{ backgroundColor: getColor(product.color) }}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleClick(product.id)}
                    className="flex-1 bg-black text-white py-4 px-6"
                  >
                    ADICIONAR AO CARRINHO
                  </button>
                </div>
                <button className="w-full border border-black py-4">
                  COMPRE AGORA
                </button>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center border">
                    ✓
                  </div>
                  <span className="text-sm">PAGAMENTO SEGURO</span>
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
                  <span className="text-sm">ENTREGA & DEVOLUÇÃO GRÁTIS</span>
                </div>
              </div>
            </div>
          </div>
          {showNot && (
            <div className="fixed bottom-4 right-4 border bg-white border-stone-500 text-stone-700 px-6 py-2 rounded-md shadow-lg fade-in-out">
              ✓ Item adicionado ao carrinho
            </div>
          )}
        </div>)}
      {!product && (<div className="text-center py-12">Product not found</div>)}
    </>
  );
}
