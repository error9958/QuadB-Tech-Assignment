import React from "react";
import { useNavigate } from "react-router-dom";

function ShowCard({ show }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/detail", { state: { show: show } });
      }}
      key={show.id}
      className=" bg-slate-100 drop-shadow-md overflow-hidden  rounded-md gap-1 md:gap-2 pb-2 flex flex-col hover:drop-shadow-xl "
    >
      {show.image ? (
        <img
          src={show.image.medium}
          alt=""
          className="h-[280px] object-cover "
        />
      ) : (
        <div className="bg-[#989898] h-[280px]   text-white flex justify-center items-center">
          <span>Image Not Found !</span>
        </div>
      )}

      <span className=" pl-2 ml-3 font-semibold text-md md:text-lg border-l-2 border-green-500">
        {show.name}
      </span>
      <span className=" pl-2   ml-3 font-semibold md:text-lg   border-l-2 border-blue-500">
        {`Rating : ${show.rating.average ? show.rating.average : "Unrated"}  `}
      </span>
    </div>
  );
}

export default ShowCard;
