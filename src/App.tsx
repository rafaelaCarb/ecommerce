import { BaseRoutes } from "./routes/BaseRoutes";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import "./App.css";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BaseRoutes />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
