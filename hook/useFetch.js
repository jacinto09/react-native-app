import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = '90a0f4b832msh8074fb5065a3f7dp111486jsn41c39244bcf9';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData( await response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  },[])

  const refetch = () => {
    setIsLoading(true)
    fetchData()

  }
  return { data, isLoading, error, refetch }
};

export default useFetch 