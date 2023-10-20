import { Box, Divider, Typography, Grid } from "@mui/material";
import Article from "./Article";
import ImageSquare from "./ImageSquare";
import React from "react";
import styles from "./HighlightSection.module.css";

const HighlightSection = (props) => {
  return (
    <section>
      <Box className={styles["section"]}>
        <Box
          className={styles["section"]}
          sx={{ background: props.background }}
        >
          <Grid container spacing={2} display="flex" direction={"row"}>
            {props.id % 2 > 0 && (
              <Grid item xs={6} display="flex" justifyContent={"flex-end"}>
                <ImageSquare src={props.image} alt="some text" />
              </Grid>
            )}
            <Grid
              item
              xs={6}
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
            {props.id % 2 == 0 && (
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
