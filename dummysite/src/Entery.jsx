import React from "react";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const signupHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ShopEase!</h1>
        <p className="text-gray-600 mb-6">
          Discover amazing deals and exclusive products. Log in or sign up to start shopping!
        </p>
        <div className="space-y-4">
          <button
            className="w-full py-3 px-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={loginHandler}
          >
            Login
          </button>
          <button
            className="w-full py-3 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            onClick={signupHandler}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entry;
