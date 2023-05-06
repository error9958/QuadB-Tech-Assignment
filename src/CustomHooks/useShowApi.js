import React, { useEffect, useState } from "react";

function useShowApi() {
  const [data, setData] = useState([]);
  const FETCH_REQUEST = "https://api.tvmaze.com/search/shows?q=the";

  useEffect(() => {
    fetch(FETCH_REQUEST)
      .then((response) => response.json())
      .then((showList) => {
        setData(showList);
      });
  }, []);

  return data;
}

export default useShowApi;
