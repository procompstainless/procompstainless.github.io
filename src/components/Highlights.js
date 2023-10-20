import React from "react";
import { Grid } from "@mui/material";
import LOGO_IMAGE from "../images/logo_2023_150ppi.png";

const Highlights = () => {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      padding={"48px"}
      spacing={6}
    >
      <Grid item xs={4}>
        <img
          src={LOGO_IMAGE}
          width={"100%"}
          height={"100%"}
          object-fit="cover"
        ></img>
      </Grid>
      <Grid item xs={4}>
        <img
          src={LOGO_IMAGE}
          width={"100%"}
          height={"100%"}
          object-fit="cover"
        ></img>
      </Grid>
      <Grid item xs={4}>
        <img
          src={LOGO_IMAGE}
          width={"100%"}
          height={"100%"}
          object-fit="cover"
        ></img>
      </Grid>
      <Grid item xs={4}>
        <img
          src={LOGO_IMAGE}
          width={"100%"}
          height={"100%"}
          object-fit="cover"
        ></img>
      </Grid>
      <Grid item xs={4}>
        <img
          src={LOGO_IMAGE}
          width={"100%"}
          height={"100%"}
          object-fit="cover"
        ></img>
      </Grid>
      <Grid item xs={4}>
        <img
          src={LOGO_IMAGE}
          width={"100%"}
          height={"100%"}
          object-fit="cover"
        ></img>
      </Grid>
    </Grid>
  );
};

export default Highlights;
