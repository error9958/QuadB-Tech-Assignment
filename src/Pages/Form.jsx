import React, { useState } from "react";

import ReactDOM from "react-dom";

function Form({ show, setDisplay, setScroll }) {
  const [error, setError] = useState(false);
  return ReactDOM.createPortal(
    <div
      onClick={() => {
        setDisplay(false);
        setScroll(true);
      }}
      className="fixed z-10 top-0 md:text-lg flex justify-center backdrop-blur-sm items-center h-full w-full bg-black/70"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e, setError, setDisplay);
        }}
        className=" relative bg-white z-20  md:w-[768px]  px-4 mx-4 md:px-12 py-8 flex flex-col gap-4  "
      >
        <span
          onClick={() => {
            setDisplay(false);
            setScroll(true);
          }}
          className=" absolute right-0 top-0 px-2 py-1 text-white bg-black hover:bg-red-400 cursor-pointer"
        >
          close
        </span>
        <span className="border-l-2 border-blue-500 bg-blue-200 py-2 pl-2 md:pl-4 font-medium text-xl md:text-3xl">
          BOOK TICKETS FOR <b>{show.name}</b>
        </span>

        {error && (
          <span className="text-gray-500 bg-red-200   px-4 py-2 text-lg border-l-2 border-red-400  ">
            Fill all the details !
          </span>
        )}

        <div className="flex flex-col w-full gap-1">
          <span className="text-xs md:text-sm">FULL NAME</span>
          <input
            placeholder="Enter Your Name"
            type="text"
            spellCheck={false}
            className="w-full  outline-none border  hover:border-green-400 border-grybor md:px-6 md:py-4 px-4 py-2"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <span className="text-xs md:text-sm">DATE</span>
          <input
            type="date"
            spellCheck={false}
            className="w-full  outline-none border  hover:border-green-400 border-grybor md:px-6 md:py-4 px-3 py-1"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-xs md:text-sm">TIME</span>
          <input
            type="time"
            spellCheck={false}
            className="w-full  outline-none border  hover:border-green-400 border-grybor md:px-6 md:py-4 px-3 py-1"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-full gap-1">
            <span className="text-xs md:text-sm">ROW</span>
            <input
              type="number"
              spellCheck={false}
              className="w-full  outline-none border  hover:border-green-400 border-grybor md:px-6 md:py-4 px-3 py-1"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <span className="text-xs md:text-sm">SEAT NUMBER</span>
            <input
              type="number"
              spellCheck={false}
              className="w-full  outline-none border  hover:border-green-400 border-grybor md:px-6 md:py-4 px-3 py-1"
            />
          </div>
        </div>

        <button
          type="submit"
          className=" text-white self-center bg-black w-40 font-semibold text-lg p-2 md:px-8 md:py-4"
        >
          BUY
        </button>
      </form>
    </div>,
    document.getElementById("portal")
  );
}

function submitHandler(event, setError, setDisplay) {
  const name = event.target[0].value;
  const date = event.target[1].value;
  const time = event.target[2].value;
  const row = event.target[3].value;
  const seatNumber = event.target[4].value;

  if (name && date && time && row && seatNumber) {
    const userInfo = {
      name,
      date,
      time,
      row,
      seatNumber,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setDisplay(false);
  } else {
    setError(true);
  }
}

export default Form;
