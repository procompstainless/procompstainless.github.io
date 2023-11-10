import { Box, Divider, Typography, Grid, useMediaQuery } from "@mui/material";
import Article from "./Article";
import ImageSquare from "./ImageSquare";
import React from "react";
import styles from "./HighlightSection.module.css";
import { useTheme } from "@emotion/react";

const HighlightSection = (props) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <section>
      <Box className={styles["section"]}>
        <Box
          className={styles["section"]}
          sx={{ background: props.background }}
        >
          <Grid container spacing={2} display="flex" direction={"row"}>
            {props.id % 2 > 0 && isSmScreen && (
              <Grid item xs={6} display="flex" justifyContent={"flex-end"}>
                <ImageSquare src={props.image} alt="some text" />
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Article
                  label={props.label}
                  title={props.title}
                  body={props.body}
                  button={props.button}
                  textAlign={props.id % 2 > 0 ? "left" : "right"}
                />
              </Box>
            </Grid>
            {props.id % 2 == 0 && isSmScreen && (
              <Grid item xs={6} display="flex" justifyContent={"flex-start"}>
                <ImageSquare src={props.image} alt="some text" />
              </Grid>
            )}
          </Grid>
        </Box>{" "}
      </Box>
      <Divider />
    </section>
  );
};

export default HighlightSection;
