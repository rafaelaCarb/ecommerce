import React, { useState } from "react";
import { FormData } from "../../commons/form-data";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/AuthService";

const SignupSection = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClickSignup = async () => {
    setApiError(false);
    const response = await AuthService.signup(formData);

    if (response?.status === 200 || response?.status === 201) {
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    } else {
        if (response?.data?.validationErrors) {
          setApiError(response.data.validationErrors);
        }
        setApiError(true);
    }
}


  return (
    <section className="bg-gradient-to-b from-amber-100 from-0% via-rose-100 via-50% to-gray-300 to-100% w-screen flex items-center justify-center h-screen">
      <div className="bg-white w-2/5 rounded-md">
        <div className="w-full sm:w-[85%] lg:w-full rounded-lg shadow">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="font-inter text-center text-2xl">GLAMIFY</h1>
            <h1 className="text-center font-inter leading-tight tracking-tight md:text-3xl">
              Registre-se
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
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
                onClick={onClickSignup}
                className="w-full text-white bg-stone-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Criar conta
              </button>
              {apiError && <div className="text-sm text-center text-red-400 mt-2">Falha ao cadastrar-se!</div>}
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
