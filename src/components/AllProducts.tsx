"use client";

import { type FC, useState } from "react";
import ProductCard from "./ProductCard";
import { allProducts } from "../constants/index";
import { SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";

const AllProducts: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col justify-between items-center mb-8">
        {isFilterOpen ? (
          <></>
        ) : (
          <>
            <h2 className="text-2xl font-medium">ALL PRODUCTS</h2>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex mt-2 items-center text-sm border border-gray-200 px-6 py-1 hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal size={16} className="mr-2" />
              FILTRAR
            </button>
          </>
        )}
      </div>

      <div className="flex">
        {isFilterOpen && <FilterSidebar />}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            isFilterOpen ? "lg:grid-cols-3 ms-5" : "lg:grid-cols-4"
          } gap-6 flex-1`}
        >
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
