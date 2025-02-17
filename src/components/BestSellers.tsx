import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { SearchRequest, SortType } from "../commons/search";
import { Product } from "../commons/product";
import { ProductService } from "../service/ProductService";

const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const params: SearchRequest = {
      filters: [],
      page: 0,
      rows: 5,
      sort: {
        field: "rating",
        type: SortType.DESC
      }
    };

    const response = await new ProductService().search(params);
    setProducts(response.content);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium mb-2">MAIS VENDIDOS</h2>
        <a
          href="/produtos"
          className="inline-block text-sm border border-gray-200 px-6 py-1 hover:bg-gray-50 transition-colors"
        >
          VER TODOS
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
