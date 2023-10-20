import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import styles
import styles from "./Navbar.module.css";

// import assets
import { Box, Tab, Tabs, Typography, Menu, MenuItem } from "@mui/material";
import PrimaryButton from "./buttons/PrimaryButton";
import config from "../config";
import NavLogo from "./NavLogo";

const Navbar = () => {
  // hooks
  const navigate = useNavigate();

  // state variables
  const [value, setValue] = React.useState(0);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const openProducts = Boolean(anchorElProducts);
  const openServices = Boolean(anchorElServices);

  // handler functions
  const handleClickProducts = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleCloseProducts = () => {
    setAnchorElProducts(null);
  };

  const handleClickServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServices = () => {
    setAnchorElServices(null);
  };

  const handleChange = (event, newValue) => {
    if (newValue === value) {
      console.log("Nothing to change.");
    } else if (newValue === 0) {
      console.log("Navigating home.");
      navigate("/");
    } else if (newValue === 1) {
      console.log("Navigating to about page.");
      navigate("/about");
    }
    setValue(newValue);
  };

  // JSX
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-start"}>
        <NavLogo />

        {/* tabs for navigation */}
        {/* !!! REPLACE TABS WITH MENU ICON GIVEN CHANGES IN SCREEN SIZE - MOBILE */}
        <Box display={"flex"} padding={"12px"} alignItems={"center"}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navbar_tabs"
            TabIndicatorProps={{
              style: { backgroundColor: "white" },
            }}
          >
            <Tab label="Home" sx={{ fontWeight: "bold" }} />
            <Tab label="About" sx={{ fontWeight: "bold" }} />
            <Tab
              label="Products"
              id="products-button"
              sx={{ fontWeight: "bold" }}
              aria-controls={openProducts ? "products-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openProducts ? "true" : undefined}
              onClick={handleClickProducts}
            />
            <Tab
              label="Services"
              id="services-button"
              sx={{ fontWeight: "bold" }}
              aria-controls={openServices ? "services-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openServices ? "true" : undefined}
              onClick={handleClickServices}
            />
          </Tabs>

          {/* menu of product items */}
          <Menu
            id="products-menu"
            anchorEl={anchorElProducts}
            open={openProducts}
            onClose={handleCloseProducts}
            MenuListProps={{ "aria-labelledby": "products-button" }}
          >
            <MenuItem
              onClick={() => {
                navigate("/products/utility-panels");
                handleCloseProducts();
              }}
            >
              Utility Panels
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/products/pipe-and-tube");
                handleCloseProducts();
              }}
            >
              Pipe and Tube
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/products/fittings");
                handleCloseProducts();
              }}
            >
              Fittings
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/products/instrumentation");
                handleCloseProducts();
              }}
            >
              Instrumentation
            </MenuItem>
          </Menu>

          {/* menu of service items */}
          <Menu
            id="services-menu"
            anchorEl={anchorElServices}
            open={openServices}
            onClose={handleCloseServices}
            MenuListProps={{ "aria-labelledby": "services-button" }}
          >
            <MenuItem
              onClick={() => {
                navigate("/services/custom-fabrication");
                handleCloseServices();
              }}
            >
              Custom Fabrication
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/services/engineering-design");
                handleCloseServices();
              }}
            >
              Engineering Design
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/services/orbital-welding");
                handleCloseServices();
              }}
            >
              Orbital Welding
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/services/oxygen-service");
                handleCloseServices();
              }}
            >
              Oxygen Service
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/services/quality-inspection");
                handleCloseServices();
              }}
            >
              Quality Inspection
            </MenuItem>
          </Menu>
        </Box>

        {/* contact us area */}
        <Box
          display={"flex"}
          flexGrow="1"
          justifyContent={"right"}
          alignItems={"center"}
          padding={"24px"}
        >
          <Box padding={"16px"}>
            <Typography>{config.phoneNumber}</Typography>
          </Box>
          <Box>
            <PrimaryButton text="Send us a message" size="medium" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
