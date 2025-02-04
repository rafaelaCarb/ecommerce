import { useState } from "react";
import { allProducts } from "../constants";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

const ShoppingCart = () => {
  const { cartItems, clearCart, cartQuantity } = useShoppingCart();
  const [showNot, setShowNot] = useState(false);

  const subtotal = cartItems.reduce((total, item) => {
    const product = allProducts.find((p) => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);
  const handleClick = () => {
    clearCart();
    setShowNot(true);
    const timer = setTimeout(() => setShowNot(false), 4000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="container mx-auto py-24">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-inter mb-6">CARRINHO DE COMPRAS</h2>
          {cartQuantity ? (
            <>
              {" "}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center">
                <div className="w-1/3 p-1 text-center text-xl shadow-sm font-light border rounded-md">
                  Seu carrinho está vazio!
                </div>
              </div>
            </>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-medium mb-4">Resumo do pedido</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Preço total dos items</span>
                  <span>R$ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="text-green-600 font-medium">GRÁTIS</span>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Coupon No."
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                  Aplicar Cupom
                </button>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub Total</span>
                  <span>R$ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>R$ {subtotal.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-500 text-right">
                  Price Inclusive of VAT
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <button
                  onClick={() => handleClick()}
                  className="w-full bg-stone-900 text-white py-3 rounded-md hover:bg-black transition-colors"
                >
                  Finalizar Compra
                </button>
                <button className="w-full border py-3 rounded-md hover:bg-gray-50 transition-colors">
                  Continuar Comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNot && (
        <div className="fixed flex-col w-1/3 text-lg h-32 font-inter bottom-[45%] right-[30%] text-center flex items-center justify-center border bg-white px-5 py-10 rounded-md shadow-lg fade-in-out">
          COMPRA FINALIZADA!
          <br />
          <p className="text-gray-500 text-medium">
            Seu pedido foi confirmado. Em breve, cuidaremos de tudo para você!
          </p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
