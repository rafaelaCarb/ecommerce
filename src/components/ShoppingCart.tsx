import { useCallback, useEffect, useState } from "react";
import { Product } from "../commons/product";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { ProductService } from "../service/ProductService";

const ShoppingCart = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const [products, setProducts] = useState<Record<number, Product>>({});
  const navigate = useNavigate();

  // Função para buscar um produto pelo ID e armazená-lo no estado
  const fetchProduct = useCallback(async (id: number) => {
    if (!products[id]) {
      try {
        const response = await new ProductService().findById(id);
        setProducts((prev) => ({ ...prev, [id]: response.data }));
      } catch (error) {
        console.error(`Erro ao buscar produto ${id}:`, error);
      }
    }
  }, [products]);

  // Busca todos os produtos do carrinho
  useEffect(() => {
    cartItems.forEach((item) => fetchProduct(item.id));
  }, [cartItems, fetchProduct]);

  // Calcula o subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const product = products[item.id];
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const handleClick = () => {
    navigate("/pagamento");
  };

  return (
    <div className="container mx-auto py-24">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-inter mb-6 text-center sm:text-start">
            CARRINHO DE COMPRAS
          </h2>
          {cartQuantity ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="md:w-1/3 p-1 text-center text-xl shadow-sm font-light border rounded-md">
                Seu carrinho está vazio!
              </div>
            </div>
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
                  onClick={handleClick}
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
    </div>
  );
};

export default ShoppingCart;
