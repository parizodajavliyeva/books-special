import React, { useEffect } from "react";
import { API } from "../utils/config";

const a = () => {
  useEffect(() => {
    API.get("/user/me")
      .then((res) => console.log(res.data))
      .catch((err) => err.message);
  } , []);
  return <div>
    
  </div>;
};

export default a;
