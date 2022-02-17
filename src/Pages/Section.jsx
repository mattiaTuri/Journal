import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Articles from "./Articles";

function Section() {
  const currentLocation = useLocation();
  const sectionPath = currentLocation.pathname;

  const { id, setCount } = useState(1);

  const { articles } = useFetch(
    "https://api.nytimes.com/svc/news/v3/content/all" +
      sectionPath +
      ".json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  return (
    <div className="section-articles">
      {articles.map((article) => {
        return (
          <Articles
            key={id}
            title={article.title}
            img={article.multimedia[0].url}
            description={article.abstract}
          />
        );
      })}
    </div>
  );
}

export default Section;
