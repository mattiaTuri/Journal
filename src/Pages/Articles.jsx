import React, { useContext, useState } from "react";
import useAxios from "../Hooks/useAxios";
import Article from "./Article";
import { Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import header from "../Assets/css/articles.css";
import { SectionContext } from "../Home";
import Loading from "./Loading";
import Error from "./Error";
import defaultImage from "../Assets/img/default-news.png"

function Articles() {

  const sectionPath = useContext(SectionContext);

  const { articles, loading, status } = useAxios(
    "https://api.nytimes.com/svc/topstories/v2/" +
      sectionPath +
      ".json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  var firstArticle = articles.find(article => article.title !== "")
  var newArticleList = articles.filter(article => article.title !== firstArticle.title)

  if (loading) {
    return <Loading />;
  } else if (status === 404) {
    return <Error />;
  } else {
    return (
      <div className="section-article">
          <Card
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
                {firstArticle.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                {firstArticle.abstract}
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                <Link href={firstArticle.url} target="_blank">
                  {firstArticle.url === "null" ? "" : "Continue reading"}
                </Link>
              </Typography>
            </CardContent>
            <CardMedia
              className="main-article-image"
              component="img"
              image={firstArticle.multimedia !== null ? firstArticle.multimedia[0].url : defaultImage}
            />
          </Card>
        <div className="sub-article">
          {newArticleList.map((article, i) => {
            if (article.title !== "" ) {
              return (
                <Article
                  key={i}
                  title={article.title}
                  img={article.multimedia !== null ? article.multimedia[0].url : defaultImage}
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
