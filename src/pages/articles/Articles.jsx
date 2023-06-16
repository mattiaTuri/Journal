import React, { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import Article from "../../components/shared/Article";
import { Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import style from "../../Assets/css/articles.css";
import { SectionContext } from "../../Home";
import Loading from "../../components/shared/Loading";
import Error from "../error/Error";
import defaultImage from "../../Assets/img/default-news.png";
import MainArticle from "../../components/shared/MainArticle";

function Articles() {
  const sectionPath = useContext(SectionContext);

  const { articles, loading, status } = useAxios(
    "https://api.nytimes.com/svc/topstories/v2/" +
      sectionPath +
      ".json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  var firstArticle = articles.find((article) => article.title !== "");
  var newArticleList = articles.filter(
    (article) => article.title !== firstArticle.title
  );

  if (loading) {
    return <Loading />;
  } else if (status === 404) {
    return <Error />;
  } else {
    return (
      <Box className="section-article">
        <MainArticle title={firstArticle.title} abstract={firstArticle.abstract} url={firstArticle.url} multimedia={firstArticle.multimedia}/>      
        <Box className="articles-list">
          {newArticleList.map((article, index) => {
            if (article.title !== "") {
              return (
                <Article
                  key={index}
                  title={article.title}
                  img={
                    article.multimedia !== null
                      ? article.multimedia[0].url
                      : defaultImage
                  }
                  description={article.abstract}
                  info={article.url}
                />
              );
            }
          })}
        </Box>
      </Box>
    );
  }
}

export default Articles;
