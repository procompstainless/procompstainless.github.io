import React from "react";
import { useNavigate } from "react-router-dom";

// import styles
import styles from "./Navbar.module.css";

// import assets
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import config from "../../config";
import NavLogo from "./NavLogo";
import { LocalPhone } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import NavTabs from "./NavTabs";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  // hooks
  const navigate = useNavigate();
  const theme = useTheme();

  // adaptive styling
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // JSX
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-start"}>
        <NavLogo />

        {isMdScreen ? (
          <>
            <NavTabs />

            {/* contact us area */}
            <Box
              display={"flex"}
              flexGrow="1"
              justifyContent={"right"}
              alignItems={"center"}
              padding={"16px"}
            >
              <Box padding={"16px"}>
                {isSmScreen ? (
                  <Typography>{config.phoneNumber}</Typography>
                ) : (
                  <Button href="tel:+17327861500">
                    <LocalPhone color={theme.palette.primary.main} />
                  </Button>
                )}
              </Box>
              <Box>
                <PrimaryButton
                  text="Send us a message"
                  size="medium"
                  onClick={navigate(
                    "https://procomp-inc-44078592.hubspotpagebuilder.com/high-quality-materials-and-custom-solutions-contact-our-team-procomp"
                  )}
                />
              </Box>
            </Box>
          </>
        ) : (
          <NavDrawer />
        )}
      </Box>
    </>
  );
};

export default Navbar;
