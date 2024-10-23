import axios from "axios";
import { useState } from "react";

const useFetchContent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(``);
      if (response?.status !== 200) {
        setError("Error Fetching the data from the api");
      } else return response;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { fetchData, loading, error };
};
export default useFetchContent;
