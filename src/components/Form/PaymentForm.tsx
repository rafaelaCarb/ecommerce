import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import elo from "../../assets/cards/elo.png";
import visa from "../../assets/cards/visa.png";
import mastercard from "../../assets/cards/mastercard.png";
import itau from "../../assets/cards/itau.png";
interface PaymentFormData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
  onPrevious: () => void;
}

const PaymentForm = ({ onSubmit, onPrevious }: PaymentFormProps) => {
  const [paymentForm, setPaymentForm] = useState<PaymentFormData>({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const navigate = useNavigate();
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(paymentForm);
    navigate("/carrinho");
  };
  return (
    <div className="space-y-8">
      <h2 className="font-inter text-center text-3xl">
        Informações do Pagamento
      </h2>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="cardNumber"
              className="lock text-start text-sm font-medium text-gray-500"
            >
              Número do Cartão
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentForm.cardNumber}
                onChange={handlePaymentChange}
                className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              ></input>
              <div className="absolute right-2 top-1 flex justify-between items-center space-x-1">
                <img className="w-8 h-5" src={elo} alt="" />
                <img className="w-7 h-7" src={visa} alt="" />
                <img className="w-7 " src={mastercard} alt="" />
                <img className="w-6 h-6" src={itau} alt="" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="cardName"
              className="lock text-start text-sm font-medium text-gray-500"
            >
              Nome no Cartão
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={paymentForm.cardName}
              onChange={handlePaymentChange}
              className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiryDate"
                className="lock text-start text-sm font-medium text-gray-500"
              >
                Data de Expiração
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentForm.expiryDate}
                onChange={handlePaymentChange}
                placeholder="MM/AA"
                className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="lock text-start text-sm font-medium text-gray-500"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentForm.cvv}
                onChange={handlePaymentChange}
                className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <button
          type="submit"
          className="w-full mb-3 p-2 bg-stone-900 text-white rounded-md"
        >
          Finalizar
        </button>
        <button
          type="button"
          onClick={onPrevious}
          className="w-full p-2 border border-stone-900 rounded-md"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
