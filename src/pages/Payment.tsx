import Navbar from "../components/Navbar";
import PaymentSection from "../components/PaymentSection";
import Footer from "../components/Footer";

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <PaymentSection />
      </div>
      <Footer />
    </>
  );
};

export default Payment;
