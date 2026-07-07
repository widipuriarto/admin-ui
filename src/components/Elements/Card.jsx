import React, { useContext } from "react"; 
import { DarkModeContext } from "../../context/darkModeContext"; // Impor context

function Card(props) {
  const { title, link = false, desc } = props;
  const { isDarkMode } = useContext(DarkModeContext); // Gunakan context

  return (
    <div className="h-full flex flex-col">
      {/* Warna teks judul berubah menjadi putih saat dark mode */}
      <div className={`flex justify-between items-center mb-2 ${isDarkMode ? "text-white" : "text-gray-02"}`}>
        <div className="text-2xl">{title}</div> 
        {link && <div className="text-xs text-primary">View All</div>}
      </div>
      
      {/* Warna background Card berubah jadi bg-gray-800 saat dark mode */}
      <div className={`flex-1 rounded-lg px-6 py-5 shadow-xl ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        {desc}
      </div>
    </div>
  );
}

export default Card;
