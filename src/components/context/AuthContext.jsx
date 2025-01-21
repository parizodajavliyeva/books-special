import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false); 
  useEffect(()=>{
    localStorage.setItem("isAuth" , isAuth)
  } ,[isAuth] )

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
