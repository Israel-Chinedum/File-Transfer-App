import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/chakraComponents/ui/provider.tsx";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
