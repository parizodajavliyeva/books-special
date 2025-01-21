import React, { useState } from "react";
import { API } from "../utils/config";

const AddBook = () => {
  const [file, setFile] = useState(null);
  const [inputValues, setInputValues] = useState({});

  const onChange = (evt) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const token = localStorage.getItem("token");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(file, inputValues);
    const formData = new FormData();
    formData.append("title", inputValues.title);
    formData.append("page", inputValues.page);
    formData.append("year", inputValues.year);
    formData.append("description", inputValues.description);
    formData.append("author_id", inputValues.author_id);
    formData.append("price", inputValues.price);
    formData.append("genre_id", inputValues.genre_id);
    formData.append("image", file);

    API.post("/book", formData, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-white mb-6">Add Book</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="page"
            className="block text-sm font-medium text-gray-300"
          >
            Page Count
          </label>
          <input
            id="page"
            name="page"
            type="text"
            placeholder="Page Count"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-300"
          >
            Year
          </label>
          <input
            id="year"
            name="year"
            type="text"
            placeholder="Year"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
          />
        </div>


        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-300"
          >
            Price
          </label>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Price"
            step="0.01"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="author_id"
            className="block text-sm font-medium text-gray-300"
          >
            Author ID
          </label>
          <input
            id="author_id"
            name="author_id"
            type="text"
            placeholder="Author ID"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="genre_id"
            className="block text-sm font-medium text-gray-300"
          >
            Genre ID
          </label>
          <input
            id="genre_id"
            name="genre_id"
            type="text"
            placeholder="Genre ID"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-300"
          >
            Book Image
          </label>
          <div className="mt-1 relative">
            <label
              htmlFor="image"
              className="flex items-center justify-between w-full p-2 border border-gray-600 rounded-md shadow-sm cursor-pointer bg-gray-700 hover:bg-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <span
                className={`ml-2 font-semibold ${
                  file ? "text-lg" : "text-gray-500"
                }`}
              >
                {file ? file.name : "Choose a file"}
              </span>
              <span className="ml-2 text-indigo-600 font-medium">Browse</span>
            </label>
            <input
              id="image"
              name="image"
              type="file"
              onChange={(evt) => setFile(evt.target.files[0])}
              className="hidden"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;



// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { API } from "../utils/config";

// const AddBook = () => {
//   const [file, setFile] = useState(null);
//   const [inputValues, setInputValues] = useState({});

//   const onChange = (evt) => {
//     const { name, value } = evt.target;

//     setInputValues((prevValues) => {
//       const updatedValues = { ...prevValues, [name]: value };

//       // `author_id` qiymatiga qarab `genre_id` ni avtomatik o'zgartirish
//       if (name === "author_id") {
//         switch (value) {
//           case "1":
//             updatedValues.genre_id = "1";
//             break;
//           case "2":
//             updatedValues.genre_id = "2";
//             break;
//           case "3":
//             updatedValues.genre_id = "3";
//             break;
//           case "4":
//             updatedValues.genre_id = "4";
//             break;
//           case "5":
//             updatedValues.genre_id = "5";
//             break;
//           default:
//             updatedValues.genre_id = ""; // Boshqa qiymatlar uchun
//             break;
//         }
//       }

//       return updatedValues;
//     });
//   };

//   const onDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     setFile(selectedFile);
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: "image/*",
//   });

//   const token = localStorage.getItem("token");

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const formData = new FormData();
//     formData.append("title", inputValues.title);
//     formData.append("page", inputValues.page);
//     formData.append("year", inputValues.year);
//     formData.append("description", inputValues.description);
//     formData.append("author_id", inputValues.author_id);
//     formData.append("price", inputValues.price);
//     formData.append("genre_id", inputValues.genre_id);
//     formData.append("image", file);

//     API.post("/book", formData, {
//       headers: {
//         Authorization: token,
//       },
//     })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err.response.data.message));
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center">
//       <h1 className="text-2xl font-semibold text-white mb-6">Add Book</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg bg-gray-800 p-6 shadow-md rounded-lg"
//       >
//         {/* Title */}
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-300">
//             Title
//           </label>
//           <input
//             id="title"
//             name="title"
//             type="text"
//             placeholder="Title"
//             onChange={onChange}
//             className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
//           />
//         </div>

//         {/* Author ID */}
//         <div className="mb-4">
//           <label htmlFor="author_id" className="block text-sm font-medium text-gray-300">
//             Author ID
//           </label>
//           <input
//             id="author_id"
//             name="author_id"
//             type="text"
//             placeholder="Author ID"
//             value={inputValues.author_id || ""}
//             onChange={onChange}
//             className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
//           />
//         </div>

//         {/* Genre ID */}
//         <div className="mb-4">
//           <label htmlFor="genre_id" className="block text-sm font-medium text-gray-300">
//             Genre ID
//           </label>
//           <input
//             id="genre_id"
//             name="genre_id"
//             type="text"
//             placeholder="Genre ID"
//             value={inputValues.genre_id || ""}
//             onChange={onChange}
//             className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
//           />
//         </div>

//         {/* Drag-and-Drop */}
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
//             isDragActive ? "border-indigo-500 bg-gray-700" : "border-gray-500 bg-gray-800"
//           }`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p className="text-white">Drop the file here...</p>
//           ) : (
//             <p className="text-gray-300">Drag & drop a file here, or click to select a file</p>
//           )}
//           {file && <p className="text-indigo-400 mt-2">{file.name}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-2 px-4 mt-6 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;
