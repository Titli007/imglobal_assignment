import React from "react";
import loading_logo from "../../assets/Layer_1.png";

interface LoadingProps {
  isOpen: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center relative">
        {/* Close Button (Optional, Remove if not needed) */}
        <button className="absolute top-3 right-3 text-gray-600">✕</button>

        {/* Loading Logo */}
        <div className="flex justify-center mb-3">
          <img src={loading_logo} alt="Loading" className="w-12 h-12" />
        </div>

        {/* Loading Text */}
        <p className="font-bold text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u
        </p>
        <p className="text-gray-600 mt-2">
          onsectetur adipiscing elit, sed d,
        </p>

        {/* Click Here Link */}
        <a href="#" className="text-pink-600 font-semibold mt-2 block">
          Click Here
        </a>
      </div>
    </div>
  );
};

export default Loading;
