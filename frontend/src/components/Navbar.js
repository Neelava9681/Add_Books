import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography varient="h1" component="div" sx={{ flexGrow: 5 }}>
            Book shop
          </Typography>

          <Stack direction="row" spacing={2}>
          <Link to="/" style={{textDecoration:"none", color:"white"}} ><Button color="inherit">Home</Button></Link>
            <Link to="/Bookadd" style={{textDecoration:"none", color:"white"}} ><Button color="inherit">Add Books</Button></Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
