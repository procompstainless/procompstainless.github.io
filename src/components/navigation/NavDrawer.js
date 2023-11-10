import React, { useState } from "react";

// import styles
import styles from "./NavDrawer.module.css";

// import assets
import {
  Box,
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
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  DesignServices,
  Home,
  Diamond,
  Markunread,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import TextButton from "../buttons/TextButton";
import { useNavigate } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const NavDrawer = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [isOpenProductsList, setIsOpenProductsList] = useState(false);
  const [isOpenServicesList, setIsOpenServicesList] = useState(false);
  const drawerWidth = 240;

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleClickProducts = () => {
    setIsOpenProductsList(!isOpenProductsList);
  };

  const handleClickServices = () => {
    setIsOpenServicesList(!isOpenServicesList);
  };

  return (
    <>
      <Box
        paddingLeft={"16px"}
        display={"flex"}
        flexGrow="1"
        justifyContent={"right"}
      >
        <TextButton
          id="menu-button"
          onClick={() => setOpen(!open)}
          text={
            <>
              {" "}
              <p className={styles["menu-button"]}></p>
              <MenuIcon
                className={styles["menu-button"]}
                color={theme.palette.primary.main}
              />
            </>
          }
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
        // variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", height: "106px" }}>
          <Box display={"flex"} flexGrow="1" justifyContent={"right"}>
            <TextButton
              onClick={() => setOpen(!open)}
              text={
                <>
                  <p>Close</p>
                  <ChevronRightIcon color={theme.palette.primary.main} />
                </>
              }
            />
          </Box>
        </DrawerHeader>
        <Divider />
        <List
          id="menu-list"
          sx={{ width: "100%", maxWidth: 300 }}
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          <ListItemButton onClick={navigate("/")}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={handleClickProducts}>
            <ListItemIcon>
              <Diamond />
            </ListItemIcon>
            <ListItemText primary="Products" />
            {isOpenProductsList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isOpenProductsList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/products/utility-panels")}
              >
                <ListItemText primary="Utility Panels" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/products/pipe-and-tube")}
              >
                <ListItemText primary="Pipe and Tube" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/products/fittings")}
              >
                <ListItemText primary="Fittings" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/products/instrumentation")}
              >
                <ListItemText primary="Instrumentation" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickServices}>
            <ListItemIcon>
              <DesignServices />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {isOpenServicesList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isOpenServicesList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/services/custom-fabrication")}
              >
                <ListItemText primary="Custom Fabrication" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/services/engineering-design")}
              >
                <ListItemText primary="Engineering Design" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/services/orbital-welding")}
              >
                <ListItemText primary="Orbital Welding" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/services/oxygen-services")}
              >
                <ListItemText primary="Oxygen Service" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={navigate("/services/quality-inspection")}
              >
                <ListItemText primary="Quality Inspection" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={navigate(
              "https://procomp-inc-44078592.hubspotpagebuilder.com/high-quality-materials-and-custom-solutions-contact-our-team-procomp"
            )}
          >
            <ListItemIcon>
              <Markunread />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default NavDrawer;
