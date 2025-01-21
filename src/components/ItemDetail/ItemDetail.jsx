import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../utils/config";

const ItemDetail = () => {
  const [bookData, setBookData] = useState(null);
  const { bookId } = useParams();
  const [author, setAuthor] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    API.get(`/book/bookId/${bookId}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => setBookData(res.data))
      .catch((err) => console.log(err.message));
  }, [bookId]);

  useEffect(() => {
    if (bookData?.author_id) {
      API.get(`/author/authorId/${bookData.author_id}`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => setAuthor(res.data))
        .catch((err) => console.log(err.message));
    }
  }, [bookData]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          {bookData?.title || "Loading..."}
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-white">Author:</span>{" "}
            {author?.first_name} {author?.last_name}
          </p>
          <p>
            <span className="font-semibold text-white">Category:</span>{" "}
            {bookData?.category}
          </p>
          <p>
            <span className="font-semibold text-white">Publisher:</span>{" "}
            {bookData?.publisher}
          </p>
          <p>
            <span className="font-semibold text-white">Pages:</span>{" "}
            {bookData?.page_count}
          </p>
          <p>
            <span className="font-semibold text-white">Description:</span>{" "}
            {bookData?.description}
          </p>
        </div>
        <img
          src={`https://books-backend-production-6f61.up.railway.app/${bookData?.image}`}
          alt={bookData?.title}
          className="w-full h-48 object-cover rounded-md mt-4"
        />
      </div>
    </div>
  );
};

export default ItemDetail;
