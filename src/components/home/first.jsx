import React from "react";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl text-white text-center">
        hehehe gaje ga si nis maaf ya kalo alay fdjskfjksdlajfkljdsaklfjdklsajf
      </h1>
      <Link
        to="/whatsapp"
        className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2"
      >
       <img src="image/icon/arrow.svg" alt="" />
      </Link>
    
    </div>
  );
};

export default First;
