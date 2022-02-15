import React, { useState, useEffect } from "react";
import Home from "./Home";
import Articles from "./Articles";
import { Routes, Route } from "react-router-dom";
import Pages from "./Pages/Pages";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function App() {
  const [sections, setSectionArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
      )
      .then((res) => {
        setSectionArticles(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Articles />} />
        <Route path="/:id" element={<Pages />} />
      </Route>
    </Routes>
  );
}

export default App;
