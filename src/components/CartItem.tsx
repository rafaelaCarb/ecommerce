import { allProducts } from "../constants"
import { useShoppingCart } from "../context/ShoppingCartContext"

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
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h3 className="text-lg">{item.name}</h3>
          <p className="text-gray-600 text-lg">R${item.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => decreaseCartQuantity(id)}
          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          -
        </button>
        <span className="font-medium text-lg w-8 text-center">{quantity}</span>
        <button
          onClick={() => increaseCartQuantity(id)}
          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem

