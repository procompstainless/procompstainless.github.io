import React from "react";
import { Link } from "react-router-dom";

// import styles
import styles from "./NavLogo.module.css";

// import assets
import { Box } from "@mui/material";
import LOGO_IMAGE from "../images/logo_2023_150ppi.png";

const NavLogo = () => {
  return (
    <>
      {/* !!! MAKE LOGO IMAGE FLEXIBLE GIVEN CHAGES IN SCREEN SIZE */}
      <Link to="/">
        <Box padding={"12px"}>
          <img
            src={LOGO_IMAGE}
            className={styles["logo-image"]}
            alt="logo_image"
          />
        </Box>
      </Link>
    </>
  );
};

export default NavLogo;
