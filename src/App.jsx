import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import Account from "./components/Accaunt/Accaunt";
import Settings from "./components/Settings/Settings";
import Security from "./components/Security/Security";
import Adiblar from "./components/Adiblar/Adiblar";
import Login from "./components/Login/Login";
import { AuthProvider, useAuth } from "./components/context/AuthContext";
import Register from "./components/Register/Register";
import AddBook from "./components/AddBook/AddBook";
import AddAuthor from "./components/AddAuthor/AddAuthor";

const App = () => {
  const { isAuth, setIsAuth } = useAuth();
  const [books, setBooks] = useState([]);
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const router = createBrowserRouter([ //isAuth ? <Login /> :
    {
      path: "/",
      element:  <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/item/:bookId",
      element: <ItemDetail />,
    },
    {
      path: "/adiblar",
      element: <Adiblar />,
    },
    {
      path: "/add-book",
      element: <AddBook />,
    },
    {
      path: "/add-author",
      element: <AddAuthor />,
    },
    {
      path: "/user",
      element: <UserProfile />,
      children: [
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "security",
          element: <Security />,
        },
        {
          path: "account",
          element: <Account />,
        },
      ],
    },{
      path: "/info",
      element: <adddddd/>
    }
  ]);

  return <AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
};

export default App;
