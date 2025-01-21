import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Item from "../Item/Item";
import badiiyat from "../../assets/b.png";
import mask from "../../assets/mask.png";
import group from "../../assets/group.png";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  const [genreId, setGenreId] = useState(1); 
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); 
const token = localStorage.getItem("token")
console.log(token);

  const handleGenreChange = (id) => {
    setGenreId(id);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAdiblarClick = () => {
    setGenreId(5); 
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-8">
        <img src={badiiyat} alt="" />

        <div className="flex items-center gap-6 relative">
          <a href="/" className="text-blue-400 hover:underline font-medium">
            Bosh sahifa
          </a>
          <NavLink to="/adiblar" onClick={handleAdiblarClick} className="text-blue-400 hover:underline font-medium">
            Adiblar
          </NavLink>

          <NavLink to={"/add-book"} className="text-blue-400 hover:underline font-medium">
            AddBook
          </NavLink>

          <NavLink to={"/add-author"} className="text-blue-400 hover:underline font-medium">
            AddAuthor
          </NavLink>

          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img className="" src={mask} alt="" />

            {showDropdown && (
              <div className="absolute top-full right-0 bg-gray-800 shadow-lg rounded-lg w-40 py-2 z-10">
                <NavLink
                  to="/user" //
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/user/addauthor"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                  Add Author
                </NavLink>
                <NavLink
                  to="/user/addbook"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                  Add Book
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      <img className="block mx-auto h-auto mb-4 " src={group} alt="" />

      <div>
        <div className="bg-gray-800 rounded-xl shadow-md p-8 mb-8 max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">
            Qidirish
          </h3>
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Kitoblar, audiolar, maqolalar..."
              className="w-60 border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
              <IoSearch />
              Izlash
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">
            Asosiy kategoriyalar
          </h3>
          <div className="flex gap-4 justify-center mb-4">
            <NavLink
              to="#"
              onClick={() => handleGenreChange(1)}
              className="px-4 py-2 bg-blue-700 text-blue-100 font-medium rounded-lg shadow hover:bg-blue-800"
            >
              Temuriylar
            </NavLink>

            <NavLink
              to="#"
              onClick={() => handleGenreChange(2)}
              className="px-4 py-2 bg-blue-700 text-blue-100 font-medium rounded-lg shadow hover:bg-blue-800"
            >
              Jadid
            </NavLink>

            <NavLink
              to="#"
              onClick={() => handleGenreChange(3)}
              className="px-4 py-2 bg-blue-700 text-blue-100 font-medium rounded-lg shadow hover:bg-blue-800"
            >
              Sovet
            </NavLink>

            <NavLink
              to="#"
              onClick={() => handleGenreChange(4)}
              className="px-4 py-2 bg-blue-700 text-blue-100 font-medium rounded-lg shadow hover:bg-blue-800"
            >
              Mustaqillik
            </NavLink>
          </div>
        </div>
      </div>

      {genreId === 5 ? (
        <div className="text-center text-xl font-bold">Adiblar</div> 
      ) : (
        <Item genreId={genreId} searchTerm={searchTerm} /> 
      )}
    </div>
  );
};

export default Home;
