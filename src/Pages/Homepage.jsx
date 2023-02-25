import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import useShowApi from "../CustomHooks/useShowApi";

function Homepage() {
  //custom Hook for fetching Api

  const data = useShowApi();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className=" py-5 px-4  lg:w-[1000px] mx-auto grid grid-cols-2  sm:grid-cols-3     md:grid-cols-4 gap-x-6 gap-y-6 ">
        {data?.map((d) => {
          return (
            <div
              onClick={() => {
                navigate("/detail", { state: { show: d.show } });
              }}
              key={d.show.id}
              className=" bg-slate-100 drop-shadow-md gap-2 pb-3 flex flex-col hover:drop-shadow-xl "
            >
              {d.show.image ? (
                <img src={d.show.image.medium} alt="" className="w-full" />
              ) : (
                <div className="bg-slate-200 w-full h-full flex justify-center items-center">
                  <span></span> Image Not Found !
                </div>
              )}

              <span className=" pl-2 ml-3 font-semibold text-lg border-l-2 border-green-500">
                {d.show.name}
              </span>
              <span className=" pl-2   ml-3 font-semibold text-lg  border-l-2 border-black">
                {`Rating : ${
                  d.show.rating.average ? d.show.rating.average : "Unrated"
                }  `}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}



export default Homepage;


