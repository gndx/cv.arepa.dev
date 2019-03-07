import { useState, useEffect } from "react";

const useGetData = (url) => {
  const [myData, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return myData;
}

export default useGetData;