"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, User, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { cartQuantity } = useShoppingCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`z-20 font-inter fixed top-0 left-0 right-0 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        } container mx-auto px-4 py-4`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="ms-8 text-2xl font-semibold flex items-center">
            GLAMIFY
          </a>

          <button
            className="absolute flex items-center md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-neutralGray" />
            ) : (
              <Menu className="h-6 w-6 text-neutralGray" />
            )}
          </button>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden md:flex"
            } flex-col md:flex-row items-center md:space-x-8 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0`}
          >
            <a
              href="/"
              className="text-sm hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              INÍCIO
            </a>
            <a
              href="/produtos?category=1"
              className="text-sm hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              HOMEM
            </a>
            <a
              href="/produtos?category=2"
              className="text-sm hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              MULHER
            </a>
            <a
              href="/produtos?category=5"
              className="text-sm hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              ACESSÓRIOS
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Search size={17} />
            <Link to="/login">
              <User size={17} />
            </Link>
            <Heart size={17} />
            <Link to="/carrinho">
              <div className="relative">
                {cartQuantity ? (
                  <>
                    {" "}
                    <div className="w-4 h-4 text-xs bg-red-500 absolute -right-3 -top-3 rounded-full flex items-center justify-center text-white font-semibold">
                      {cartQuantity}
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <ShoppingCart size={17} />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
