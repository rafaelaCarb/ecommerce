import { type FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";

const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>(); // Change number to string

  return (
    <>
      <Navbar />
      <ProductSection id={Number(id)} /> {/* Convert id to number if needed */}
      <Footer />
    </>
  );
};

export default ProductPage;