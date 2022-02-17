import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [sections, setSections] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setSections(res.data.results);
        setArticles(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return { sections, articles };
}

export default useFetch;
