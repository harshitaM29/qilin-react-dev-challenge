import { useEffect, useState } from "react";
import axios from "axios";

//custom hook for fetching data
const useFetchedData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        let fetcheddata = await axios(url);
        setData(fetcheddata.data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, [url]);
  return { data, error };
};

export default useFetchedData;
