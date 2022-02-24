import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";

function Article({ title, img, description, info }) {
  return (
    <>
      <Card
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}
        className="card-article"
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" element="h6">
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            element="body2"
          >
            {description}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            <Link href={info} target="_blank">Continue reading</Link>
          </Typography>
        </CardContent>
        <CardMedia component="img" sx={{ width: 151 }} image={img} />
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
  title: "News of the day",
};

export default Article;
