import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("https://full-stackproject-wk3s.onrender.com/api/getdetails/signupdata", {
        params: { email, password },
  
      });
       console.log(response)
       console.log(response.statusText)
       if (response.statusText === "OK") {
        alert(response.data.message); // Show success message
        navigate("/All"); // Redirect to main page
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching data:", error.response ? error.response.data : error.message);
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back!</h2>
        <p className="text-gray-500 text-center mb-6">Login to your account</p>
        <form className="space-y-4" onSubmit={fetchData}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex items-center justify-between">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-purple-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
