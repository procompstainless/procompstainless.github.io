import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

/* props map
  size="large"
  text="Click Me"
  onClick={() => {}}
*/

const PrimaryHeroButton = (props) => {
  const theme = useTheme();
  let boxShadow = "none";

  if (props.boxShadow === true) {
    boxShadow = "2px 2px 10px black";
  }

  return (
    <Button
      size={props.size} // small, medium, large
      sx={{
        color: "black",
        backgroundColor: theme.palette.primary.hero,
        border: "2px solid",
        borderColor: theme.palette.primary.hero,
        boxShadow: boxShadow,
        ":hover": {
          backgroundColor: theme.palette.primary.hero,
          filter: "brightness(0.70)",
        },
      }}
      onClick={props.onClick && props.onClick}
    >
      {props.text ? props.text : "Click Me"}
    </Button>
  );
};

export default PrimaryHeroButton;
