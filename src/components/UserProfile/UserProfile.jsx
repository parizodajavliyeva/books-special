import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserProfile = ({ darkMode }) => {
  return (
    <div className={`p-6 max-w-3xl mx-auto rounded-md shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>

      <nav className="mb-6 space-y-4 sm:space-y-2">
        <NavLink 
          to="account" 
          className={({ isActive }) =>
            isActive 
              ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
              : `text-gray-600 ${darkMode ? 'dark:text-gray-400' : 'text-gray-600'} hover:text-blue-400`
          }
        >
          My Account
        </NavLink><br />
        <NavLink 
          to="settings" 
          className={({ isActive }) =>
            isActive 
              ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
              : `text-gray-600 ${darkMode ? 'dark:text-gray-400' : 'text-gray-600'} hover:text-blue-400`
          }
        >
          Settings
        </NavLink><br />
        <NavLink 
          to="security" 
          className={({ isActive }) =>
            isActive 
              ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
              : `text-gray-600 ${darkMode ? 'dark:text-gray-400' : 'text-gray-600'} hover:text-blue-400`
          }
        >
          Security
        </NavLink><br />
      </nav>

      <Outlet />
    </div>
  );
};

export default UserProfile;
