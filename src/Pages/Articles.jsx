import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Article from "./Article";
import { Container, Typography } from "@mui/material";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import { Grid } from "@mui/material";
import header from "../Assets/css/articles.css";

function Section() {
  const currentLocation = useLocation();
  const sectionPath = currentLocation.pathname;
  const { count, setCount } = useState(1);

  const { articles } = useAxios(
    "https://api.nytimes.com/svc/news/v3/content/all" +
      sectionPath +
      ".json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  return (
    <div className="section-article">
      {articles.map((article, i) => {
        if (i === 0) {
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
                  {article.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="body1"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  {article.abstract}
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  <Link href="#">Continue reading</Link>
                </Typography>
              </CardContent>
              <CardMedia
                className="main-article-image"
                component="img"
                image={article.multimedia[2].url}
              />
            </Card>
          );
        }
      })}
      <div className="sub-article">
        {articles.map((article, i) => {
          if (i != 0) {
            return (
              <Article
                key={i}
                title={article.title}
                url={article.multimedia[2].url}
                description={article.abstract}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Section;