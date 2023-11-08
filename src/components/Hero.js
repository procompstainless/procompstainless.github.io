import React from "react";

// style imports
import { useTheme } from "@emotion/react";
import styles from "./Hero.module.css";
import HERO_IMAGE from "../images/ceiling_panels.png";

// component imports
import SecondaryHeroButton from "./buttons/SecondaryHeroButton";
import PrimaryHeroButton from "./buttons/PrimaryHeroButton";
import { useMediaQuery, Box, Typography } from "@mui/material";

/* props map
title="Title"
image={}
primaryButton="Click Here"
primaryOnClick={() => {}}
secondaryButton="Click Here"
secondaryOnClick={() => {}}
*/

const Hero = (props) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <section
        className={styles["section"]}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${props.image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Box className={styles["content"]}>
          <Box className={styles["text-box"]}>
            <Typography
              variant="h1"
              fontWeight={600}
              className={styles["text"]}
            >
              {props.title}
            </Typography>
          </Box>
          <Box flex={"true"} flexDirection={"row"}>
            <PrimaryHeroButton
              text={props.primaryButton}
              size="large"
              onClick={props.primaryOnClick}
            />
            <SecondaryHeroButton
              text={props.secondaryButton}
              size="large"
              onClick={props.secondaryOnClick}
            />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Hero;
