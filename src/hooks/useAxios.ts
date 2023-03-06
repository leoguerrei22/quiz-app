import axios from "axios";
import { AnyCnameRecord } from "dns";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }:any) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;