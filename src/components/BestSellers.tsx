import { FC } from "react";
import ProductCard from "./ProductCard";
import { products } from "../constants/index";

const BestSellers: FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium mb-2">BESTSELLERS</h2>
        <a
          href="/produtos"
          className="inline-block text-sm border border-gray-200 px-6 py-1 hover:bg-gray-50 transition-colors"
        >
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
