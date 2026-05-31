import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error"
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <SignInPage />
    },
    {
      path: "/register",
      element: <SignUpPage />
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />
    },
    {
      path: "/balance",
      element: <BalancePage />
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
