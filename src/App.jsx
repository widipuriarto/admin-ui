import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error"
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      // element: (
      //   <div className="flex justify-center items-center min-h-screen">
      //     <Link to="/login" className="p-2 m-5 bg-primary text-white">
      //       Login
      //     </Link>
      //     |
      //     <Link to="/register" className="p-2 m-5 bg-primary text-white">
      //       Register
      //     </Link>
      //   </div>
      // ),
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
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
