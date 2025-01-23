import { type FC } from "react"
import { Link } from "react-router-dom"
import { Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  colors: string[]
}

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/produto/${product.id}`} className="group relative block">
      <div className="relative mb-4">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
        <button
          className="absolute top-2 left-5 p-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5" />
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
    </Link>
  )
}

export default ProductCard

