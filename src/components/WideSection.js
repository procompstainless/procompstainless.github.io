import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import styles from "./WideSection.module.css";

const WideSection = (props) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <section>
      <Box
        className={`${styles["section"]}`}
        sx={{
          background: props.background,
          padding: isLgScreen
            ? "48px 24px"
            : isSmScreen
            ? "36px 18px"
            : "24px 12px",
        }}
      >
        <Typography
          variant={isLgScreen ? "h2" : isSmScreen ? "h3" : "h4"}
          className={styles["title"]}
        >
          {props.title}
        </Typography>
        {props.children}
      </Box>
    </section>
  );
};

export default WideSection;
