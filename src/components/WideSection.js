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
        className={`${styles["section"]} `}
        sx={{ background: props.background }}
      >
        <Typography variant="h2" className={styles["title"]}>
          {props.title}
        </Typography>
        {props.children}
      </Box>
    </section>
  );
};

export default WideSection;
