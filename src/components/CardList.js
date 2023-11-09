import { useTheme } from "@emotion/react";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const CardList = ({ list }) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const Cards = list.map((item) => {
    if (!!item) {
      return (
        <Card sx={{ width: "100%" }} id={item?.id}>
          <CardMedia
            sx={{
              height: isLgScreen
                ? 360
                : isMdScreen
                ? 240
                : isSmScreen
                ? 160
                : 120,
            }}
            image={item.hero.image}
            title={item.id}
          />
          <CardContent>
            <Box display={"flex"}>
              <Typography gutterBottom variant="h5">
                {item.title}
              </Typography>
            </Box>
            <Box display={"flex"}>
              <Box justifyContent={"flex-start"}>
                <Typography variant="body2" color="text.secondary">
                  {item.hero.title}
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Button onClick={() => (window.location.href = "" + item.path)}>
              Learn More
              <ArrowForward />
            </Button>
          </CardActions>
        </Card>
      );
    }
  });

  return (
    <Box sx={{ flexGrow: 1, margin: "24px" }}>
      <Stack
        container
        direction={"row"}
        spacing={4}
        justifyContent={"space-evenly"}
      >
        {!!Cards && Cards}
      </Stack>
    </Box>
  );
};

export default CardList;
