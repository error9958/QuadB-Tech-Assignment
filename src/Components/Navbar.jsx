import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="py-5 bg-black flex justify-center ">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="text-white m-auto font-bold text-4xl hover:text-slate-200  cursor-pointer "
      >
        TV SHOW
      </div>
    </div>
  );
}

export default Navbar;
