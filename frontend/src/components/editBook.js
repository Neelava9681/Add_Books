import React, { useState } from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { useParams } from 'react-router-dom';

export default function EditBook() {
  const { id } = useParams();

  const [state, setstate] = useState({
    id:id,
    BookName:"",
    AuthorName:"",
    Price:"",
    About:""
  });

  const getBookData = async () => {
    try {
      const Res = await axios.get(`https://add-books-backend.onrender.com/api/bookdata/` + id);
      setstate({...state, BookName:Res.data.BookName, AuthorName:Res.data.AuthorName, Price:Res.data.Price, About:Res.data.About});
      console.log(state);
    } catch (error) {
      console.log("error detected", error);
    }
  };

  React.useEffect(() => {
    getBookData();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setstate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const Navigate = useNavigate()

  const onSubmit = async () => {
    console.log("the final values are:", state);
    setstate((prev) => ({
      ...prev,
    }));
    try {
      const response = await axios.post(
        "http://localhost:5001/api/update/"+id,
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
      <div>
        <Navbar />
      </div>
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
            borderRadius: "20px",
          }}
        >
          <div>
            <Typography
              variant="h2"
              sx={{ justifyContent: "center", display: "flex" }}
            >
              Edit Book
            </Typography>
          </div>

          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              id="outlined-required"
              label="BookName"
              value={state.BookName}
              name="BookName"
              onChange={handleInputChange}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              label="AuthorName"
              id="fullWidth"
              value={state.AuthorName}
              name="AuthorName"
              onChange={handleInputChange}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              label="price"
              id="fullWidth"
              name="Price"
              value={state.Price}
              type="number"
              onChange={handleInputChange}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <TextField
              fullWidth
              label="About"
              id="fullWidth"
              name="About"
              value={state.About}
              onChange={handleInputChange}
            />
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "10px",
            }}
          >
            <Button variant="contained" color="success" onClick={onSubmit}>
              Update
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
