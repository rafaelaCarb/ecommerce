import { useShoppingCart } from "../context/ShoppingCartContext"
import { X } from "lucide-react"
import { ProductService } from "../service/ProductService"
import { Product } from "../commons/product"
import { useCallback, useEffect, useState } from "react"
type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart()
  const [product, setProduct] = useState<Product>();

  const fetchProduct = useCallback(async () => {
    const response = await new ProductService().findById(Number(id));
    setProduct(response.data);
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {product &&
        <div className="w-full flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-4">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-20 h-20 object-cover" />
            <div>
              <h3 className="text-sm font-medium">{product.name}</h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center border rounded-md">
              <button onClick={() => decreaseCartQuantity(id)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                -
              </button>
              <span className="px-2 py-1 text-sm">{quantity}</span>
              <button onClick={() => increaseCartQuantity(id)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>
            <div className="ms-10 text-right">
              <p className="text-sm font-medium">Rs {(product.price * quantity).toLocaleString()}</p>
              <p className="text-xs text-gray-500">Rs {product.price.toLocaleString()} / item</p>
            </div>
            <button onClick={() => removeFromCart(id)} className="ms-4 text-red-400 hover:text-red-500">
              <X />
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default CartItem

