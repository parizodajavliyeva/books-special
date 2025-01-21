
import React, { useState, useEffect, useRef } from "react";
import img from "../../../public/img.jpg"
const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const fileInputRef = useRef(null); 

  useEffect(() => {
    const savedFirstName = localStorage.getItem("firstName") || "Odina";
    const savedLastName = localStorage.getItem("lastName") || "Jovliyeva";
    const savedPhone = localStorage.getItem("phone") || "908180776";
    const savedEmail = localStorage.getItem("email") || "nezuko.chan1198@gmail.com";
    const savedImage = localStorage.getItem("image" ) || {img}


    setFirstName(savedFirstName);
    setLastName(savedLastName);
    setPhone(savedPhone);
    setEmail(savedEmail);
    setProfileImage(savedImage)
  }, []);

  const handleSaveChanges = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);

    alert("Changes have been saved!");
  };

  const handleImageClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); 
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 dark:text-white max-w-4xl mx-auto rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <div
            className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={handleImageClick}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5a7.5 7.5 0 0115 0v1.125c0 .621-.504 1.125-1.125 1.125h-12.75C5.004 21.75 4.5 21.246 4.5 20.625V19.5z"
                />
              </svg>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            onClick={handleSaveChanges}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
