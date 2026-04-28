import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

    return (

    <div className="flex flex-col bg-white p-6 rounded-lg shadow-md border border-transparent transition-all duration-300 hover:scale-[1.02] hover:border-pink-400 hover:bg-pink-50 h-full">
      
      <h2 className="text-xl font-bold text-gray-800 mb-3 capitalize">
        {title}
      </h2>

      <p className="text-gray-600 mb-6 grow">
        {body}
      </p>

      <button 
        onClick={() => setIsClicked(true)}
        className={`w-full py-3 px-4 rounded-md text-white font-semibold transition-all duration-300 hover:brightness-110 ${
          isClicked ? "bg-special-red2" : "bg-gray-500"
        }`}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );

}

export default PostCard;
