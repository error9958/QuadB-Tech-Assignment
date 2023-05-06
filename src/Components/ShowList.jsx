import React from "react";
import useShowApi from "../CustomHooks/useShowApi";
import ShowCard from "./ShowCard";

function ShowList() {
  const FetchedData = useShowApi();
  return (
    <div className=" py-5 px-4 sm:w-[480px] md:w-[768px] xl:w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-6 gap-y-6 ">
      {FetchedData?.map((data) => {
        return <ShowCard key={data.show.id} show={data.show} />;
      })}
    </div>
  );
}

export default ShowList;
