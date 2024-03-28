const express = require("express")
const router= express.Router()
const {createBooks,getAll, deletebook, updatebook, bookData } = require('../controllers/createBooks.js')

router.post("/books", createBooks)
router.get("/allBooks", getAll)
router.delete("/deletebook/:_id", deletebook);
router.get("/bookdata/:_id", bookData)
router.post("/update/:_id", updatebook);

module.exports=router