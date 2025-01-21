import React, { useState, useEffect } from "react";

const Settings = () => {
  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.style.backgroundColor = newMode ? "#121212" : "#fff";
      document.body.style.color = newMode ? "#e0e0e0" : "#000";
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div className={`p-6 max-w-xl mx-auto ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'} rounded-md shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Settings</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md p-2 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:outline-none"
        >
          <option value="English">English</option>
          <option value="Uzbek">Uzbek</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Theme</h3>
        <button
          onClick={toggleTheme}
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Settings;
