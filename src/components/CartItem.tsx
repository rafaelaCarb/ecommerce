import { allProducts } from "../constants"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { X } from "lucide-react"
type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart()
  const item = allProducts.find((i) => i.id === id)
  if (item == null) return null

  return (
    <div className="w-full flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
       <div className="flex items-center space-x-4">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover" />
        <div>
          <h3 className="text-sm font-medium">{item.name}</h3>
          <p className="text-xs text-gray-500">Color: Midnight</p>
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
          <p className="text-sm font-medium">Rs {(item.price * quantity).toLocaleString()}</p>
          <p className="text-xs text-gray-500">Rs {item.price.toLocaleString()} / item</p>
        </div>
        <button onClick={() => removeFromCart(id)} className="ms-4 text-red-400 hover:text-red-500">
          <X />
        </button>
      </div>
    </div>
  )
}

export default CartItem

