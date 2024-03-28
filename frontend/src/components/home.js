import React from "react";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div>
        <Navbar />
        <div
          style={{
            display: "flex",
            marginTop: "90px",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1} md={0.5}>
              
              </Grid>
              <Grid item xs={10} md={11}>
                <BookCard />
              </Grid>
              <Grid item xs={1} md={0.5}>
                
              </Grid>
             
            </Grid>
          </Box>

          {/* <BookCard /> */}
        </div>
      </div>
    </>
  );
};

export default home;
