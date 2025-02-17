import React, { useState } from "react";
import { FormData } from "../../commons/form-data";

const SignupSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      setError("Por favor, preencha todos os campos.");
      setMessage(null);
      return;
    }

    try {
      setMessage("Conta criada com sucesso!");
      setError(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      setError("Ocorreu um erro ao criar a conta.");
      setMessage(null);
    }
  };

  return (
    <section className="bg-gradient-to-b from-amber-100 from-0% via-rose-100 via-50% to-gray-300 to-100% w-screen flex items-center justify-center h-screen">
      <div className="bg-white w-2/5 rounded-md">
        <div className="w-full sm:w-[85%] lg:w-full rounded-lg shadow">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="font-inter text-center text-2xl">GLAMIFY</h1>
            <h1 className="text-center font-inter leading-tight tracking-tight md:text-3xl">
              Registre-se
            </h1>
            {message && (
              <p className="text-green-500 text-sm mb-4">{message}</p>
            )}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 focus:bg-gray-50 focus:ring-0 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Nome Sobrenome"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Seu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="nome@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Telefone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+55 (11) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500">
                    Eu aceito os{" "}
                    <a
                      className="font-medium text-stone-800 hover:underline"
                      href="#"
                    >
                      Termos e Condições
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-stone-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Criar conta
              </button>
              <p className="text-sm font-light text-gray-500">
                Já possui uma conta?{" "}
                <a
                  href="/login"
                  className="font-medium text-stone-800 hover:underline"
                >
                  Logue aqui
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
