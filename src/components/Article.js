import React from "react";
import styles from "./Article.module.css";
import { Box, Typography } from "@mui/material";

/* props map
label="label"
title="title"
body="body"
button={<Button>Button</Button>}
*/

const Article = (props) => {
  let label = "";

  if (props.label) {
    label = label + props.label;
  }

  return (
    <Box
      sx={{
        maxWidth: "36rem",
        textAlign: props.textAlign,
        padding: "24px",
      }}
    >
      <Typography variant="subtitle1">{label.toUpperCase()}</Typography>
      <Typography variant="h2">{props.title}</Typography>
      <Typography variant="body1" sx={{ margin: "24px 0px" }}>
        {props.body}
      </Typography>
      {props.button}
    </Box>
  );
};

export default Article;
