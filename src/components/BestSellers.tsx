import { Heart } from "lucide-react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image1,
    colors: ["#F3E5D7", "#000000"],
  },
  {
    id: 2,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image2,
    colors: ["#FFB6C1", "#0000FF"],
  },
  {
    id: 3,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image3,
    colors: ["#000000", "#808080"],
  },
  {
    id: 4,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image4,
    colors: ["#D2B48C", "#000000"],
  },
];

const BestSellers = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium mb-2">BESTSELLERS</h2>
        <a
          href="/all"
          className="inline-block text-sm border border-gray-200 px-6 py-1 hover:bg-gray-50 transition-colors"
        >
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-[3/4] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover"
              />
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Add to wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-sm mb-3">R${product.price.toLocaleString()}</p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
