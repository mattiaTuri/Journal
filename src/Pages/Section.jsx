import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Article from "./Article";
import { Container, Typography } from "@mui/material";
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
        {articles.map((article, i) => {
          if (i === 0) {
            return (
              <Card 
                sx={{ marginTop: 20, position:"relative"}}
                className="main-article"
              >
                <CardContent className="main-article-content" sx={{ position: "absolute" }} >
                  <Typography variant="h5" element="h1">{article.title}</Typography>
                  <Typography variant="subtitle1" component="body2" gutterBottom>{article.abstract}</Typography>
                  <Typography><Link href="#">Continue reading</Link></Typography>                
                </CardContent>
                <CardMedia className="main-article-image"
                  component="img"
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
    </Container>
  );
}

export default Section;
