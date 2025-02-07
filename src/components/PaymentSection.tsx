import type React from "react";
import { useState } from "react";
import AddressForm from "../components/Form/AddressForm";
import PaymentForm from "../components/Form/PaymentForm";
import { MapPin, IdCard } from "lucide-react";

const PaymentSection: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="max-w-sm sm:max-w-xl py-24">
      <div className="mb-8">
        <div className="flex items-center justify-between px-5 sm:px-7 pb-4">
          <div>
            <div
              className={`flex items-center w-28 sm:w-44 justify-center p-2 rounded-md ${
                step == 1 ? "bg-black text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              <MapPin size={18}/> <p className="ms-1 ">Endereço</p>
            </div>
          </div>
          <div
            className={`flex-1 border-b mx-4 ${
              step >= 2 ? "border-black " : "border-gray-300"
            }`}
          ></div>
          <div>
            <div
              className={`flex items-center w-30 sm:w-44 justify-center p-2 rounded-md  ${
                step >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              <IdCard size={18}/> <p className="ms-1 ">Pagamento</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        {step === 1 ? (
          <AddressForm onNext={handleNext} />
        ) : (
          <PaymentForm onPrevious={handlePrevious} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default PaymentSection;
