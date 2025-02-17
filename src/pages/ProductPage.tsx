import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>(); 
  return (
    <>
      <Navbar />
      <ProductSection id={Number(id)} />
      <Footer />
    </>
  );
};

export default ProductPage;