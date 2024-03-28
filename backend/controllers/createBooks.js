const mongoConnect = require("../db/db");

const { ObjectId } = require("mongodb");

const createBooks = async (req, res) => {
  try {
    const db = await mongoConnect(); // Assuming mongoConnect() returns the database connection
    const book = req.body;
    const result = await db.collection("books").insertOne(book);
    console.log(result);
    res.status(201).json(result); // Return the inserted document
  } catch (error) {
    console.error("Failed to create a document:", error);
    res.status(500).json({ error: "Failed to create a document" });
  }
};

const getAll = async (req, res) => {
  try {
    const db = await mongoConnect();
    const bookData = await db.collection("books").find().toArray();
    if (bookData.length == 0) {
      return res.status(404).json({ msg: "books not found" });
    }
    res.status(200).json(bookData);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to load Employee data" });
  }
};

const deletebook = async (req, res) => {
  // console.log("Deleting book with _id:", bookId);

  try {
    const db = await mongoConnect();
    const collection = db.collection("books");
    console.log(req.params._id);

    const deletionResult = await collection.deleteOne({
      _id: ObjectId(req.params._id),
    });
    console.log(deletionResult);

    if (deletionResult.deletedCount > 0) {
      res.send({ status: "ok", data: "deleted" });
    } else {
      res.status(404).send({ status: "error", error: "Book not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", error: "Internal Server Error" });
  }
};


const bookData = async (req, res) => {
  try {
    const db = await mongoConnect();
    const book = await db.collection("books").findOne({ _id: ObjectId(req.params._id) });
    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch" });
  }
};









const updatebook = async (req, res) => {
  try {
    const db = await mongoConnect();
    const result = await db.collection("books").updateOne(
      {
        _id: ObjectId(req.params._id),
      },
      {
        $set: {
          BookName: req.body.BookName,
          AuthorName: req.body.AuthorName,
          Price: req.body.Price,
          About: req.body.About,
        },
      }
    );
    if (result.matchedCount === 1) {
      res
        .status(200)
        .send({ status: "success", message: "Book updated successfully" });
    } else {
      res.status(404).send({ status: "error", error: "Book not found" });
    }
    console.log(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", error: "Internal Server Error" });
  }
};

module.exports = { createBooks, getAll, deletebook, updatebook, bookData };
