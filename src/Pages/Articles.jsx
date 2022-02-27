import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Article from "./Article";
import { Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import header from "../Assets/css/articles.css";
import { SectionContext } from "../Home";
import Loading from "./Loading";
import Error from "./Error";

function Articles() {
  const sectionPath = useContext(SectionContext);

  const { articles, loading, status } = useAxios(
    "https://api.nytimes.com/svc/topstories/v2/" +
      sectionPath +
      ".json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  if (loading) {
    return <Loading />;
  } else if (status == 404) {
    return <Error />;
  } else {
    return (
      <div className="section-article">
        {articles.map((article, i) => {
          if (i === 0 && article.multimedia != null) {
            return (
              <Card
                key={i}
                sx={{ marginTop: 20, position: "relative" }}
                className="main-article"
              >
                <CardContent
                  className="main-article-content"
                  sx={{ position: "absolute" }}
                >
                  <Typography
                    variant="h5"
                    element="h1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {article.title || "Latest news"}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    {article.abstract}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    <Link href={article.url} target="_blank">
                      {article.url == "null" ? "" : "Continue reading"}
                    </Link>
                  </Typography>
                </CardContent>
                <CardMedia
                  className="main-article-image"
                  component="img"
                  image={article.multimedia[0].url}
                />
              </Card>
            );
          }
        })}
        <div className="sub-article">
          {articles.map((article, i) => {
            if (i !== 0 && article.title != "" && article.multimedia != null) {
              return (
                <Article
                  key={i}
                  title={article.title}
                  img={article.multimedia[0].url}
                  description={article.abstract}
                  info={article.url}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Articles;
