import type React from "react"
import { useState } from "react"

interface AddressFormData {
  street: string
  city: string
  state: string
  zipCode: string
  complement: string
}

interface AddressFormProps {
  onNext: (data: AddressFormData) => void
}

const AddressForm: React.FC<AddressFormProps> = ({ onNext }) => {
  const [addressForm, setAddressForm] = useState<AddressFormData>({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    complement: "",
  })

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddressForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNext(addressForm)
  }

  return (
    <div className="space-y-8">
      <h2 className="font-inter text-center text-3xl">Endereço de entrega</h2>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4 px-5">
          <div>
            <label htmlFor="zipCode" className="block text-start text-sm font-medium text-gray-500">
              CEP
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={addressForm.zipCode}
              onChange={handleAddressChange}
              required
              className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="street" className="block text-start text-sm font-medium text-gray-500">
              Rua
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={addressForm.street}
              onChange={handleAddressChange}
              required
              className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-start text-sm font-medium text-gray-500">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={addressForm.city}
              onChange={handleAddressChange}
              required
              className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-start text-sm font-medium text-gray-500">
                Estado
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={addressForm.state}
                onChange={handleAddressChange}
                required
                className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-start text-sm font-medium text-gray-500">
                Complemento
              </label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={addressForm.complement}
                onChange={handleAddressChange}
                required
                className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-stone-900 text-white rounded-md hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Próximo
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddressForm

