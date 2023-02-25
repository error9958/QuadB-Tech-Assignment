import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Form from "./Form";

function DetailPage() {
  const [display, setDisplay] = useState(false);
  const location = useLocation();
  const show = location.state.show;

  return (
    <>
      <Navbar />
      {display && <Form show={show} setDisplay={setDisplay} />}

      <div className="py-5  px-12 mb-10  mx-auto text-xl h-full text-white rounded-b-3xl  gap-y-4 bg-[#343434] lg:w-[1000px] flex flex-col">
        <span className="text-5xl font-bold">{show.name}</span>

        {show.image ? (
          <img src={show.image.medium} alt="" className="w-64 " />
        ) : (
          <div className="bg-slate-200 w-48 text-center text-black px-4 h-64 flex justify-center items-center">
            <span></span> Image Not Found !
          </div>
        )}
        <span>{`Language : ${show.language}`}</span>
        <span>
          {" "}
          {`Rating : ${
            show.rating.average ? show.rating.average : "Unrated"
          }  `}
        </span>
        <span>{`Status : ${show.status}`}</span>

        <div className="flex gap-3">
          {show.genres.map((e, index) => {
            return (
              <div
                key={index}
                className="bg-black px-4 py-2 text-white rounded-lg"
              >
                {e}
              </div>
            );
          })}
        </div>
        <span className="border-l-2 border-blue-500 px-4 font-bold ">PLOT</span>
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        <button
          onClick={() => {
            setDisplay(true);
          }}
          className="bg-green-500 rounded-lg py-5 font-bold hover:bg-green-600"
        >
          BOOK SHOW
        </button>
      </div>
    </>
  );
}

export default DetailPage;
