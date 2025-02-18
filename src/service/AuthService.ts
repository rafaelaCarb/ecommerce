import { UserLogin } from "../commons/user-login";
import { api } from "../lib/axios";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const signup = async (user: UserLogin): Promise<any> => {
  let response;
  try {
    response = await api.post("/users", user);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const login = async (user: UserLogin): Promise<any> => {
  let response;
  console.log(user);
  try {
    response = await api.post("/login", user);

    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));

    api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");

  if (token)
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`;

  return token ? true : false;
}

const logout = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  api.defaults.headers.common["Authorization"] = '';
}

const AuthService = {
  signup,
  login,
  isAuthenticated,
  logout,
};

export default AuthService;