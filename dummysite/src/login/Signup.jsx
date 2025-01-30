import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [Name, SetName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Pass, SetPass] = useState('');

  const passdata = async (e) => {
    e.preventDefault();

    const Userdata = {
      name: Name,
      email: Email,
      password: Pass, // Updated key to match convention
    };

    try {
      const response = await axios.post(
        'https://full-stackproject-wk3s.onrender.com/api/add/details',
        Userdata,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      alert("User data added successfully");
    } catch (error) {
      console.error("Error adding user details:", error);
      alert("Failed to add the data of the user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Sign Up for ShopEase
        </h1>
        <form onSubmit={passdata}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              value={Name}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
              onChange={(e) => SetName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              value={Email}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-black"
            >
              Password
            </label>
            <input
              value={Pass}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
              onChange={(e) => SetPass(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
