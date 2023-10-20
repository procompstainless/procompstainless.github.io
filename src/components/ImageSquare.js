import React from "react";
import styles from "./ImageSquare.module.css";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

/* props map
src={LOGO_IMAGE}
alt="logo_image"
*/

const ImageSquare = (props) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

  console.log(isXlScreen, isLgScreen, isMdScreen, isSmScreen);

  return (
    <>
      <Box padding={"24px"}>
        <img
          src={props.src}
          className={
            isXlScreen
              ? styles["xl"]
              : isLgScreen
              ? styles["lg"]
              : isMdScreen
              ? styles["md"]
              : isSmScreen
              ? styles["sm"]
              : styles["xs"]
          }
          alt={props.alt}
        />
      </Box>
    </>
  );
};

export default ImageSquare;
