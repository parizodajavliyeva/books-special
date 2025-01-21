import React, { useEffect, useState } from "react";
import { API } from "../utils/config";
import { NavLink } from "react-router-dom";

const Item = ({ genreId, searchTerm }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get(`/book/genreId/${genreId}`)
      .then((res) => {
        let filteredBooks = res.data;

        if (searchTerm) {
          filteredBooks = filteredBooks.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        setBooks(filteredBooks);
      })
      .catch((err) => {
        console.error(err.message);
        setBooks([]);
      });
  }, [genreId, searchTerm]);

  return (
    <div className="p-6 bg-gray-900 bg-black min-h-screen text-white">
      {books.length === 0 ? (
        <p className="text-center text-gray-400">Hech qanday natija topilmadi.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <NavLink to={`/item/${book.id}`} key={book.id} className="block">
              <li className="border p-4 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-400">{book.page} pages</p>
                <img
                  src={`https://books-backend-production-6f61.up.railway.app/${book.image}`}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mt-4"
                />
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Item;
