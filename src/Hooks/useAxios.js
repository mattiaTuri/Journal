import React, { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
  const [sections, setSections] = useState([]);
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setStatus();
    axios
      .get(url)
      .then((res) => {
        setSections(res.data.results);
        setArticles(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.status);
        setStatus(error.response.status);
        setLoading(false);
      });
  }, [url]);

  return { sections, articles, loading, status };
}

export default useAxios;
