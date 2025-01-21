import { type FC } from "react"
import { useParams } from "react-router-dom"
import { allProducts } from "../constants/index"

const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = allProducts.find((p) => p.id === Number.parseInt(id || ""))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl mb-6">R${product.price.toLocaleString()}</p>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Colors:</h2>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-6 py-3 w-full md:w-auto">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;

