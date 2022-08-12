const Book = require("../models/Book.model");

module.exports = {
  renderCreateBookViewController: (req, res) => res.render("books-create"),

  createNewBookController: (req, res) => {
    const { title, description, author, rating } = req.body;

    Book.create({ title, author, description, rating })
      .then(() => res.redirect("/"))
      .catch((error) => `Error while creating a book: ${error}`);
  },

  findAllBooksController: (req, res) => {
    Book.find()
      .then((allTheBooksFromDB) =>
        res.render("books-list", { allTheBooksFromDB })
      )
      .catch((error) => `Error while fetching all books: ${error}`);
  },

  findOneBookController: (req, res) => {
    const { id } = req.params;

    Book.findOne({ _id: id })
      .then((theBook) => res.render("books-details", theBook))
      .catch((error) =>
        console.log("Error while retrieving book details: ", error)
      );
  },

  renderUpdateBookViewController: (req, res) => {
    const { id } = req.params;

    Book.findById(id)
      .then((bookToEdit) => res.render("books-edit", bookToEdit))
      .catch((error) =>
        console.log("Error while updating book details: ", error)
      );
  },

  updateOneBookController: (req, res) => {
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
  },

  deleteBookController: (req, res) => {
    const { id } = req.params;

    Book.findByIdAndDelete(id)
      .then(() => res.redirect("/"))
      .catch((error) => console.log(`Error while deleting a book: ${error}`));
  },
};
