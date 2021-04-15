const express = require("express");
const router = express.Router();

const {
  renderCreateBookViewController,
  createNewBookController,
  findAllBooksController,
  findOneBookController,
  renderUpdateBookViewController,
  updateOneBookController,
  deleteBookController,
} = require("../controllers");

/* CRUD */

// Create a new book to add to the db
router.get("/books/create", renderCreateBookViewController);

router.post("/books/create", createNewBookController);

// Read all the books from the db
router.get("/", findAllBooksController);

// Read one book from the db
router.get("/books/:id", findOneBookController);

// Update a book from the db
router.get("/books/:id/edit", renderUpdateBookViewController);

router.post("/books/:id/edit", updateOneBookController);

// Delete a book from the db
router.post("/books/:id/delete", deleteBookController);

module.exports = router;
