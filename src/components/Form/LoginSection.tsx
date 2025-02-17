import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../commons/user-login";

const LoginSection = () => {
  const [form, setForm] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiSuccess, setApiSuccess] = useState(false);
  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };

  const onClickLogin = async () => {
    setPendingApiCall(true);
    setApiError(false);

    const response = await AuthService.login(form);
    if (response.status === 200) {
      setApiSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setPendingApiCall(false);
      setApiError(true);
      console.log("Falha ao efetuar login!");
    }
  };

  return (
    <div className="bg-gradient-to-b from-amber-100 from-0% via-rose-100 via-50% to-gray-300 to-100% flex w-screen h-screen items-center justify-center">
      <div className="bg-white w-full max-w-xl space-y-8 px-4 sm:px-6 shadow-lg p-9 rounded-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-inter"> GLAMIFY </h1>
          <h1 className="text-4xl font-inter">Bem vindo de volta!</h1>
          <p className="text-gray-500  text-lg">
            Coloque suas credenciais para acessar sua conta.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-start text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={onChange}
              required
              className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="nome@email.com"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500"
            >
              Senha
            </label>
            <input
              id="password"
              onChange={onChange}
              type="password"
              required
              className="mt-1 text-gray-500 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-stone-600"
              >
                Lembre de mim
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-stone-600">
                Esqueceu sua senha?
              </a>
            </div>
          </div>
          <div>
            <button
              disabled={pendingApiCall}
              onClick={onClickLogin}
              type="submit"
              className="bg-stone-900 flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-md font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Entrar
            </button>
            {apiError && (
              <div className="text-sm text-center mt-2 text-red-400">
                Falha ao autenticar-se!
              </div>
            )}
            {apiSuccess && (
              <div className="text-sm text-center mt-2 text-green-400">
                Usuário autenticado com sucesso!
              </div>
            )}
          </div>
        </form>

        <div className="text-center text-sm text-gray-500">
          Não possui uma conta?{" "}
          <a href="/cadastro" className="font-medium text-stone-600">
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
