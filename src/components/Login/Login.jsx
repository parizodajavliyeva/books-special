import React, { useState } from "react";
import { API } from "../utils/config"; 
import { useAuth } from "../context/AuthContext"; 
import { NavLink, useNavigate } from "react-router-dom";
import myImage from "../../assets/f.svg";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth(); 
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputValues); 

    API.post("/user/login", inputValues)
      .then((res) => {
        console.log("Login successful:", res.data);
        setIsAuth(true); 
        localStorage.setItem("token", res.data.token); 
        navigate("/"); 
      })
      .catch((err) => {
        console.log("Error:", err.response?.data || err.message); 
      });
  };

  const onChange = (evt) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 max-w-4xl w-full">
        {/* Image div, hidden on mobile */}
        <div className="flex-shrink-0 bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 sm:block hidden">
          <img src={myImage} alt="Login Illustration" className="w-full h-auto" />
        </div>

        <div className="flex-grow bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Login Page</h2>
          <NavLink
            to={"/register"}
            className="text-blue-500 hover:underline text-sm block mb-6"
          >
            Register
          </NavLink>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              onChange={onChange}
              name="email"
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              onChange={onChange}
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
