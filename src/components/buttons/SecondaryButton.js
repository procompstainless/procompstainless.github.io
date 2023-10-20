import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const SecondaryButton = (props) => {
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
        border: "2px solid",
        borderColor: theme.palette.primary.main,
        ":hover": {
          filter: "opacity(0.70)",
        },
      }}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default SecondaryButton;
