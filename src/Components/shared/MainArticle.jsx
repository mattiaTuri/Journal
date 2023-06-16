import React from "react";
import { Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import defaultImage from "../../Assets/img/default-news.png";

function MainArticle({title, abstract, url, multimedia}){
    return (
        <Card
          sx={{ marginTop: 20, position: "relative" }}
          className="main-article"
        >
          <CardContent
            className="main-article-content"
            sx={{ position: "absolute" }}
          >
            <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {abstract}
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              <Link href={url} target="_blank">
                {url === "null" ? "" : "Continue reading"}
              </Link>
            </Typography>
          </CardContent>
          <CardMedia
            className="main-article-image"
            component="img"
            image={
              multimedia !== null
                ? multimedia[0].url
                : defaultImage
            }
          />
        </Card>
    )
}

export default MainArticle