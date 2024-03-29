import * as React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BookCard() {
  const [allBooks, setAllBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const Res = await axios.get("https://add-books-backend.onrender.com/api/allbooks");
      setAllBooks(Res.data);
      console.log(Res.data);
    } catch (error) {
      console.log("error detected", error);
    }
  };

  const deleteBook = async (_id) => {
    try {
      // Confirm deletion
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this book?"
      );
      if (!confirmDelete) return; // If user cancels deletion, exit function

      await axios.delete(`https://add-books-backend.onrender.com/api/deletebook/${_id}`);
      const Res = await axios.get("http://localhost:5001/api/allbooks");
      setAllBooks(Res.data);
      // setAllBooks(Res.data);
      console.log("Book deleted successfully");
    } catch (error) {
      console.log("Problem deleting book", error);
    }
  };

  React.useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {allBooks.map((e) => (
            <Grid item xs={12} md={4} key={e._id}>
              <Item>
                <span style={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    Book Name:
                  </Typography>
                  <Typography variant="h4" sx={{ color: "black" }}>
                    {e.BookName}
                  </Typography>
                </span>

                <span style={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    Author:
                  </Typography>
                  <Typography variant="h4" sx={{ color: "black" }}>
                    {e.AuthorName}
                  </Typography>
                </span>

                <span style={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    Price:
                  </Typography>
                  <Typography variant="h4" sx={{ color: "black" }}>
                    {e.Price}
                  </Typography>
                </span>

                <span style={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    About:
                  </Typography>
                  <Typography variant="h4" sx={{ color: "black" }}>
                    {e.About}
                  </Typography>
                </span>

                <span
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{ marginTop: "10px" }}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteBook(e._id)}
                  >
                    Delete
                  </Button>
                  <Link to={`/editBook/${e._id}`}>
                    <Button
                      variant="outlined"
                      sx={{ marginTop: "10px" }}
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                  </Link>
                </span>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
