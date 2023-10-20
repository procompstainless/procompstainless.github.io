import React from "react";

// style imports
import { useTheme } from "@emotion/react";
import styles from "./SplitHero.module.css";

// component imports
import PrimaryHeroButton from "./buttons/PrimaryHeroButton";
import { useMediaQuery, Grid, Box } from "@mui/material";
import Article from "./Article";

/* props map
  item="Product"
  title="The leading source for high purity components"
  description="ProCOMP provides hygienic materials and custom-fabricated equipment to the process industries"
  buttonText="Get a quote"
  onClick={() => {}}
*/

const SplitHero = (props) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <section className={styles["section"]}>
        <Grid container direction={"row"} className={styles["grid"]}>
          <Grid item xs={6} className={styles["text-panel"]}>
            <Article
              label={props.label}
              title={props.title}
              body={props.body}
              button={
                <PrimaryHeroButton
                  size="large"
                  text={props.button}
                  onClick={props.onClick}
                ></PrimaryHeroButton>
              }
              textAlign="right"
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Grid>
        </Grid>
      </section>
    </>
  );
};

export default SplitHero;
