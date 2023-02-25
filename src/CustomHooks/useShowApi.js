import React, { useEffect, useState } from "react";

function useShowApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=ave")
      .then((response) => response.json())
      .then((showList) => {
        setData(showList);
      
      });
  }, []);

  return data;
}

export default useShowApi;
