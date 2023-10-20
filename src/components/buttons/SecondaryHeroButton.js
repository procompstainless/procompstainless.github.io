import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const SecondaryHeroButton = (props) => {
  const theme = useTheme();
  let boxShadow = "none";

  if (props.boxShadow === true) {
    boxShadow = "2px 2px 10px black";
  }

  return (
    <Button
      size={props.size} // small, medium, large
      variant="text"
      sx={{
        margin: "16px",
        color: theme.palette.primary.hero,
        // border: "2px solid",
        // borderColor: theme.palette.primary.hero,
        // boxShadow: "2px 2px 10px black",
        ":hover": {
          filter: "opacity(0.70)",
          textDecoration: "underline",
        },
      }}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default SecondaryHeroButton;
