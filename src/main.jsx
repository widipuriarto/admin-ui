import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Parent from "./latihan/Parent.jsx";
import { CounterContextProvider } from "./context/counterContext.jsx";
import { ThemeContextProvider } from "./context/themeContext.jsx";
import Form from "./latihan/Form.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
