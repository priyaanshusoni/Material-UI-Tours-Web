import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ImageCollage from "./ImageCollage";
import Accordions from "./Accordian";
function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        <ImageCollage />
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this Ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Las Vegas, famously known as “The Entertainment Capital of the World,”
          offers a holiday experience unlike any other. Nestled in the Nevada
          desert, this dazzling city is world-renowned for its vibrant
          nightlife, luxurious casinos, spectacular shows, and iconic resorts
          that line the famous Las Vegas Strip. Whether you're catching a Cirque
          du Soleil performance, dining at a celebrity chef’s restaurant, or
          simply marveling at the themed hotels like the Venetian or the
          Bellagio, Las Vegas promises excitement at every turn. Beyond the
          glitz and glamour, visitors can explore natural wonders like Red Rock
          Canyon or take a short trip to the Hoover Dam. A holiday in Las Vegas
          is perfect for those seeking thrill, indulgence, and unforgettable
          memories.
        </Typography>


      </Box>


      <Box>

      <Typography variant="h6" component="h4" marginTop={3}>
         Frequently asked questions
        </Typography>


        <Accordions/>

      </Box>
    </Container>
  );
}

export default Tour;
