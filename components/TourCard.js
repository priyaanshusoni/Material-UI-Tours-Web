"use client";

import { Paper } from "@mui/material";
import Container from "@mui/material";
import { Grid, Typography, Box, Rating } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/navigation";
function TourCard({ tour }) {
 console.log(tour)
  const router = useRouter();
  return (
    <Grid size={{ xl: 3, lg: 3, xs: 2, sm: 4 }}>
      <Paper>
        <img
          src={tour.image}
          alt=""
          style={{
            width: "100%",
            height: "5rem",
          }}
        />

        <Box paddingX={1}>
          <Typography component={"h2"} variant="subtitle1"  onClick={()=>router.push(`${tour.id}`)} sx={{cursor : "pointer"}} >
            {tour.name}
          </Typography>

          <Box display={"flex"} alignItems={"center"} gap={"4px"}>
            <AccessTimeIcon
              sx={{
                width: 12.5,
              }}
            />

            <Typography variant="body2" component="paragraph">
              {tour.duration} Hours
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"} marginTop={3}>
            <Rating
              name="read-only"
              value={4.5}
              readOnly
              precision={0.5}
              size="small"
            />

            <Typography variant="body2" component={"p"} marginLeft={0.5}>
              {tour.rating}
            </Typography>
            <Typography variant="body2" component={"p"} marginLeft={2}>
              ({tour.numberOfReviews})
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component={"h3"} marginTop={0}>
              From ${tour.price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default TourCard;
