import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import styles
import styles from "./Navbar.module.css";

// import assets
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  Button,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Drawer,
  Divider,
  IconButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import config from "../config";
import NavLogo from "./NavLogo";
import SecondaryHeroButton from "./buttons/SecondaryHeroButton";
import {
  ExpandLess,
  ExpandMore,
  LocalPhone,
  StarBorder,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Navbar = () => {
  // hooks
  const navigate = useNavigate();
  const theme = useTheme();

  // adaptive styling
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // <a href="tel:+17327861500">Call me</a>

  // state variables
  const [value, setValue] = React.useState(0);
  const [anchorElProducts, setAnchorElProducts] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const isOpenProducts = Boolean(anchorElProducts);
  const isOpenServices = Boolean(anchorElServices);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [isOpenProductsList, setIsOpenProductsList] = useState(false);
  const [isOpenServicesList, setIsOpenServicesList] = useState(false);
  const drawerWidth = 240;

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
    }
    // else if (newValue === 1) {
    //   console.log("Navigating to about page.");
    //   navigate("/about");
    // }
    setValue(newValue);
  };

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleClickProductsList = () => {
    setIsOpenProductsList(!isOpenProductsList);
  };

  const handleClickServicesList = () => {
    setIsOpenServicesList(!isOpenServicesList);
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // JSX
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-start"}>
        <NavLogo />

        {isMdScreen ? (
          <>
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
                {/* <Tab label="About" sx={{ fontWeight: "bold" }} /> */}
                <Tab
                  label="Products"
                  id="products-button"
                  sx={{ fontWeight: "bold" }}
                  aria-controls={isOpenProducts ? "products-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={isOpenProducts ? "true" : undefined}
                  onClick={handleClickProducts}
                />
                <Tab
                  label="Services"
                  id="services-button"
                  sx={{ fontWeight: "bold" }}
                  aria-controls={isOpenServices ? "services-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={isOpenServices ? "true" : undefined}
                  onClick={handleClickServices}
                />
              </Tabs>

              {/* menu of product items */}
              <Menu
                id="products-menu"
                anchorEl={anchorElProducts}
                open={isOpenProducts}
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
                open={isOpenServices}
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
                  onClick={() => {
                    window.location.href =
                      "https://procomp-inc-44078592.hubspotpagebuilder.com/high-quality-materials-and-custom-solutions-contact-our-team-procomp";
                  }}
                />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              paddingLeft={"16px"}
              display={"flex"}
              flexGrow="1"
              justifyContent={"right"}
            >
              <SecondaryButton
                id="menu-button"
                sx={{ fontWeight: "bold" }}
                onClick={() => setOpen(!open)}
                text={<MenuIcon color={theme.palette.primary.main} />}
              />
            </Box>
            <Drawer
              sx={{
                width: open ? drawerWidth : 0,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                },
              }}
              variant="persistent"
              anchor="right"
              open={open}
            >
              {/* <DrawerHeader sx={{ display: "flex" }}>
                <Box display={"flex"} flexGrow="1" justifyContent={"right"}>
                  <SecondaryButton
                    onClick={() => setOpen(!open)}
                    text={
                      <ChevronRightIcon color={theme.palette.primary.main} />
                    }
                    // <IconButton onClick={handleDrawerClose}>
                    //   {theme.direction === "rtl" ? (
                    //     <ChevronLeftIcon />
                    //   ) : (
                    //     <ChevronRightIcon />
                    //   )}
                    // </IconButton>
                  />
                </Box>
              </DrawerHeader> */}
              <Divider />
              <List
                id="menu-list"
                sx={{ width: "100%", maxWidth: 300 }}
                // component={"nav"}
                anchorEl={anchorElServices}
                open={isOpenServices}
                onClose={handleCloseServices}
                // MenuListProps={{ "aria-labelledby": "services-button" }}
                aria-labelledby="menu-button"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={handleClickProductsList}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                  {isOpenProducts ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpenProducts} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Drawer>
          </>
        )}
      </Box>
    </>
  );
};

export default Navbar;
