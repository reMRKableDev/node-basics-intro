const express = require("express");
const router = express.Router();

const Book = require("../models/Book.model");

/* CRUD */

// Create a new book to add to the db
router.get("/books/create", (req, res) => res.render("books-create"));

router.post("/books/create", (req, res) => {
  const { title, description, author, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then(() => res.redirect("/"))
    .catch((error) => `Error while creating a book: ${error}`);
});

// Read all the books from the db
router.get("/", (req, res) => {
  Book.find()
    .then((allTheBooksFromDB) =>
      res.render("books-list", { allTheBooksFromDB })
    )
    .catch((error) => `Error while fetching all books: ${error}`);
});

// Read one book from the db
router.get("/books/:id", (req, res) => {
  const { id } = req.params;

  Book.findOne({ _id: id })
    .then((theBook) => res.render("books-details", theBook))
    .catch((error) =>
      console.log("Error while retrieving book details: ", error)
    );
});

// Update a book from the db
router.get("/books/:id/edit", (req, res) => {
  const { id } = req.params;

  Book.findById(id)
    .then((bookToEdit) => res.render("books-edit", bookToEdit))
    .catch((error) =>
      console.log("Error while updating book details: ", error)
    );
});

router.post("/books/:id/edit", (req, res) => {
  const { id } = req.params;
  const { title, description, author, rating } = req.body;

  Book.findByIdAndUpdate(
    id,
    { title, description, author, rating },
    { new: true }
  )
    .then(() => res.redirect(`/books/${id}`))
    .catch((error) =>
      console.log(`Error while updating a single book: ${error}`)
    );
});

// Delete a book from the db
router.post("/books/:id/delete", (req, res) => {
  const { id } = req.params;

  Book.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(`Error while deleting a book: ${error}`));
});

module.exports = router;
