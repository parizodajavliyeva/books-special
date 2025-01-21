import React, { useState } from "react";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { API } from "../utils/config";
import a from "../../assets/a.png";

const Register = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  const handleSubmit = (evt) => {
    console.log(inputValues);
    evt.preventDefault();

    API.post("/user/register", inputValues)
      .then((res) => {
        console.log(res.data);
        setIsAuth(true);
        navigate("/");
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  };

  const [inputValues, setInputValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const onChange = (evt) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Image div, hidden on mobile */}
      <div className="flex-shrink-0 bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 sm:block hidden">
        <img src={a} alt="Register Illustration" className="w-full h-auto" />
      </div>

      <div className="flex-grow bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <NavLink
            to={"/login"}
            className="text-blue-500 hover:underline text-sm block mb-4"
          >
            Login
          </NavLink>

          <input
            name="first_name"
            onChange={onChange}
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="last_name"
            onChange={onChange}
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="phone"
            onChange={onChange}
            type="number"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="email"
            onChange={onChange}
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="password"
            onChange={onChange}
            type="password"  // Changed type to password for better security
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
  );
};

export default Register;
