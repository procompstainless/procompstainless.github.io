import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";

const CardList = ({ list }) => {
  const Cards = list.map((item) => {
    if (!!item) {
      return (
        <Card sx={{ width: "100%" }} id={item?.id}>
          <CardMedia
            sx={{ height: 140 }}
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
            <Button onClick={Navigate("/" + item.id)}></Button>
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
