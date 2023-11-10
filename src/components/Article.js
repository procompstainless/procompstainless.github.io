import React from "react";
import styles from "./Article.module.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

/* props map
label="label"
title="title"
body="body"
button={<Button>Button</Button>}
*/

const Article = (props) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  let label = "";
  if (props.label) {
    label = label + props.label;
  }

  return (
    <Box
      sx={{
        maxWidth: "36rem",
        textAlign: props.textAlign,
        padding: isMdScreen ? "24px" : "12px",
      }}
    >
      <Typography variant={isMdScreen ? "subtitle1" : "subtitle2"}>
        {label.toUpperCase()}
      </Typography>
      <Typography variant={isLgScreen ? "h2" : isMdScreen ? "h3" : "h4"}>
        {props.title}
      </Typography>
      <Typography
        variant={isMdScreen ? "body1" : "body2"}
        sx={{ margin: isMdScreen ? "24px 0px" : "16px 0px" }}
      >
        {props.body}
      </Typography>
      {props.button}
    </Box>
  );
};

export default Article;
