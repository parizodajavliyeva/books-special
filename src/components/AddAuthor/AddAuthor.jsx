import React, { useState } from 'react'
import { API } from '../utils/config'

const AddAuthor = () => {
  const [file, setFile] = useState(null)
  const [inputValues, setInputValues] = useState({})

  const onChange = (evt) => {
    
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value })
  }

  const token = localStorage.getItem("token")
  
  

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = new FormData()
    formData.append("first_name", inputValues.first_name)
    formData.append("last_name", inputValues.last_name)
    formData.append("date_of_birth", parseInt(inputValues.date_of_birth))
    formData.append("date_of_death", parseInt(inputValues.date_of_death))
    formData.append("bio", inputValues.bio)
    formData.append("country", inputValues.country)
    formData.append("genre_id", inputValues.genre_id)
    formData.append("image", file)

    API.post("/author", formData, {
      headers: {
        "Authorization": token
      }
    }).then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.message))
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-white mb-6">Add Author</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-white"
          >
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-white"
          >
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date_of_birth"
            className="block text-sm font-medium text-white"
          >
            Date of Birth
          </label>
          <input
            id="date_of_birth"
            name="date_of_birth"
            type="date"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date_of_death"
            className="block text-sm font-medium text-white"
          >
            Date of Death
          </label>
          <input
            id="date_of_death"
            name="date_of_death"
            type="date"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-white"
          >
            Biography
          </label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Biography"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-white"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="genre_id"
            className="block text-sm font-medium text-white"
          >
            Genre ID
          </label>
          <input
            id="genre_id"
            name="genre_id"
            type="text"
            placeholder="Genre ID"
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-white"
          />
        </div>

        <div className="mt-1 relative">
          <label
            htmlFor="image"
            className="flex items-center justify-between w-full p-2 border border-gray-600 rounded-md shadow-sm cursor-pointer bg-gray-700 hover:bg-gray-600 focus:ring-indigo-500 focus:border-indigo-500 block text-sm font-medium text-white"
          >
            <span className={`ml-2 font-semibold ${file ? "text-lg" : "text-gray-500"}`}>
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
<br />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddAuthor
