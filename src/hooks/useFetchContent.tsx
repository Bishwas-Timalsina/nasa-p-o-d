import axios from "axios";
import { useState } from "react";
import { CONSTANTS } from "../constants/Constants";

const useFetchContent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (endPoint?:string) => {
    try {
      setLoading(true);
      const apiUrl = `${CONSTANTS?.API_URL}?api_key=5XZL0dzweXPSYLSI0ZqIarqHTqmGiuA6X15gT1V8`+`${endPoint}`;

      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        throw new Error("Error fetching the data from the API");
      }
      return response.data;
    } catch (error: any) {
      setError(error.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading, error };
};

export default useFetchContent;
