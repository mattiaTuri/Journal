import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../Pages/Error";

function useAxios(url) {
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
        console.log(error.response.status);
        if (error.response.status == 404) {
          return <Error />;
        }
      });
  }, [url]);

  return { sections, articles };
}

export default useAxios;
