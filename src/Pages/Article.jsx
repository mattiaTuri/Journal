import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../Assets/img/news-default.png";

import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";

function Article({ title, url, description }) {
  return (
    <>
    <Card sx={{ display: 'flex', marginTop: 5 }} className="card-article">
        <CardContent>
          <Typography variant="h6" element="h6">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" element="body2">
            {description}
          </Typography>
          <Typography><Link href="#">Continue reading</Link></Typography>       
        </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={url || defaultImage}
      />
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
