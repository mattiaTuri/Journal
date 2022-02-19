import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../Assets/img/news-default.png";

import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";

function Article({ title, url, description }) {
  return (
    <>
      <Card sx={{ marginTop: 5 }} className="card-article">
        <CardHeader title={title} sx={{ textAlign: "center" }}></CardHeader>
        <CardMedia component="img" image={url || defaultImage} />
        <CardContent>
          <p>{description}</p>
          <Link href="#">Continue reading</Link>
        </CardContent>
      </Card>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

Article.defaultProps = {
  url: defaultImage,
};

export default Article;
