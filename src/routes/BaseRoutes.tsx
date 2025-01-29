import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import ShoppingCart from "../pages/ShoppingCartPage";

import LoginSection from "../components/LoginSection";
import SignupSection from "../components/SignupSection";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="/cadastro" element={<SignupSection />} />
        <Route path="/carrinho" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}
