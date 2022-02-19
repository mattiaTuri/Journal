import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Article from "./Article";
import { Container } from "@mui/material";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import header from "../Assets/css/articles.css";

function Section() {
  const currentLocation = useLocation();
  const sectionPath = currentLocation.pathname;

  const { articles } = useAxios(
    "https://api.nytimes.com/svc/news/v3/content/all" +
      sectionPath +
      ".json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  return (
    <Container sx={{ justifyContent: "center" }}>
      <div className="section-articles">
        {articles.map((article, i) => {
          if (i === 0) {
            return (
              <Card
                sx={{ marginTop: 20 }}
                className="main-article card-article"
              >
                <CardContent sx={{ position: "absolute" }}>
                  <h1>{article.title}</h1>
                  <p>{article.abstract}</p>
                  <Link href="#">Continue reading</Link>
                </CardContent>
                <CardMedia
                  component="img"
                  height="194"
                  image={article.multimedia[2].url}
                />
              </Card>
            );
          }
          return (
            <Article
              key={i}
              title={article.title}
              url={article.multimedia[2].url}
              description={article.abstract}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Section;
