import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const TextButton = (props) => {
  const theme = useTheme();
  let boxShadow = "none";

  if (props.boxShadow === true) {
    boxShadow = "2px 2px 10px black";
  }

  return (
    <Button
      size={props.size} // small, medium, large
      sx={{
        color: theme.palette.primary.main,
      }}
      onClick={props.onClick}
    >
      {props.text ? props.text : "Click Me"}
    </Button>
  );
};

export default TextButton;
