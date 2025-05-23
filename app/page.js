"use client"

import TourCard from "@/components/TourCard";
import { Container ,Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/AppBar";
import cities from "@/utils/data.json"
import React from "react";






export default function Home() {






  return (
    <div>
     <ResponsiveAppBar/>
       <Container sx={{marginTop : "50px"}}>


      {cities.map((x)=>{
        return (

          <React.Fragment key={x.id}>
            <Typography 
            variant="h4"
            component={"h2"}
            marginTop={5}
           marginBottom={3}

          >
             
           Top {x.name} Tours
          </Typography>

           <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            {x.tours.map((x,index)=>(
              <TourCard key={x.id} tour = {x}  />
            ))}
    </Grid>
          </React.Fragment>
        
        )
      })}




    

       </Container>

    </div>
     
  );
}
