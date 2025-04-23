import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url, options);
      const data = response.data.results;
      setData(data);
    };

    fetchData();
  }, [url]);

  return data;
};
