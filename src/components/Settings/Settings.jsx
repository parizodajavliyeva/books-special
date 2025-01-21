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
    <div className={`p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-700 text-white rounded-md p-2"
        >
          <option value="English">English</option>
          <option value="Uzbek">Uzbek</option>
        </select>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Theme</h3>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Settings;
