import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function AuthLayout(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  // Mengambil state dan fungsi dari Context
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {/* Warna background berubah menjadi abu-abu gelap (gray-900) jika isDarkMode true */}
      <main className={`min-h-screen flex justify-center items-center ${theme.name} ${isDarkMode ? "bg-gray-900 text-white" : "bg-special-mainBg text-black"}`}>
        <div className="w-full max-w-sm">
          <Logo />
          {children}

          {/* Tombol Toggle diletakkan di bawah form login */}
          <div className="flex justify-center mt-6">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-400 transition cursor-pointer text-gray-03">
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default AuthLayout;
