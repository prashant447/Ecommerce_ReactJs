import React, { useEffect, useState } from "react";
import fetchApi from "../components/utils/api";

const fetchUser = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiCall();
  }, [endpoint]);

  const apiCall = async () => {
    const res = await fetchApi(endpoint);
    setData(res.data);
    
  };

  return {data};
};

export default fetchUser;
