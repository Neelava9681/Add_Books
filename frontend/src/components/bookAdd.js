import React from "react";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const BookAdd = () => {
  const [state, setstate] = useState("");

  const handleChange = ({ target }) => {
    setstate((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    // console.log(state)
  };


  const Navigate = useNavigate()



  const onSubmit = async () => {
    console.log("the vales are:", state);
    setstate((prev) => ({
      ...prev,
    }));
    try {
      const response = await axios.post(
        "https://add-books-backend.onrender.com/api/books",
        state
      );
      console.log("response", response.data);
      Navigate("/")
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
    <Navbar/>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "30vh" }}
      >
        <Box
          component="section"
          sx={{
            width: "80vh",

            justifyContent: "center",
            backgroundColor: "white",
            boxShadow: "1px dashed white",
            borderRadius:"20px"
          }}
        >
          <div>
            <Typography
              variant="h2"
              sx={{ justifyContent: "center", display: "flex" }}
            >
              Add Books here
            </Typography>
          </div>
          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              label="BookName"
              id="fullWidth"
              value={state.BookName}
              name="BookName"
              onChange={handleChange}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              label="AuthorName"
              id="fullWidth"
              value={state.AuthorName}
              name="AuthorName"
              onChange={handleChange}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              label="price"
              id="fullWidth"
              name="Price"
              value={state.number}
              type="number"
              onChange={handleChange}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              label="About"
              id="fullWidth"
              name="About"
              value={state.About}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "10px",
            }}
          >
            <Button onClick={onSubmit} variant="contained" color="success">
              Success
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default BookAdd;
