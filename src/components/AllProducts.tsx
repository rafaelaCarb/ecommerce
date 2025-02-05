import { type FC, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";
import { ProductService } from "../service/ProductService";
import { Product } from "../commons/product";
import { FilterType, SearchRequest } from "../commons/search";

const AllProducts: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchFilteredProducts = useCallback(async () => {
    const params: SearchRequest = {
      filters: [],
    };

    // , "color", "size"
    ["category"].forEach((filter) => {
      if (searchParams.has(filter)) {
        params?.filters?.push({
          field: filter === "category" ? "categories.id" : filter,
          value: searchParams.get(filter) ? searchParams.get(filter)?.split(",") : "",
          type: FilterType.IN,
        });
      }
    });

    const response = await new ProductService().search(params);
    setProducts(response.content);
  }, [searchParams]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [fetchFilteredProducts]);

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative">
      <div className="flex flex-col justify-between items-center mb-8">
        <h2 className="text-2xl font-medium">TODOS PRODUTOS</h2>
        <button
          onClick={toggleFilter}
          className="inline-flex mt-2 items-center text-sm border border-gray-200 px-6 py-1 hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal size={16} className="mr-2" />
          FILTRAR
        </button>
      </div>

      <div className="flex">
        {!isMobile && (
          <div className={`transition-all duration-300 ${isFilterOpen ? "w-64" : "w-0 overflow-hidden"}`}>
            <FilterSidebar onClose={toggleFilter} />
          </div>
        )}

        {isMobile && isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleFilter}></div>
        )}

        {isMobile && (
          <div
            className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 transform ${isFilterOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <FilterSidebar onClose={toggleFilter} />
          </div>
        )}

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1 ${isFilterOpen && !isMobile ? "ml-6" : ""
            }`}
        >
          {products.map((product) => (
            <ProductCard key={`${product.id}-${Math.random()}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;