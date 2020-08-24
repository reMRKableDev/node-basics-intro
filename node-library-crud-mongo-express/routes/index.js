const express = require("express");
const router = express.Router();

const Book = require("../models/Book.model");

/* GET home page */
router.get("/", (_, res) => {
  Book.find()
    .then((allTheBooksFromDB) =>
      res.render("books-list", { allTheBooksFromDB })
    )
    .catch((error) =>
      console.log("Error while getting the books from the DB: ", error)
    );
});

router.get("/:bookId", (req, res) => {
  const { bookId } = req.params;

  Book.findOne({ _id: bookId })
    .then((theBook) => res.render("books-details", theBook))
    .catch((error) =>
      console.log("Error while retrieving book details: ", error)
    );
});

module.exports = router;
