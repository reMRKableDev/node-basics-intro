const mongoose = require("mongoose");
const Book = require("../models/Book.model");

const DB_NAME = "library-project";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const books = [
  {
    title: "The Hunger Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Suzanne Collins",
    rating: 10,
  },
  {
    title: "Harry Potter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    author: "J.K. Rowling ",
    rating: 9,
  },
  {
    title: "To Kill a Mockingbird ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Harper Lee",
    rating: 8,
  },
  {
    title: "Pride and Prejudice ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Austen",
    rating: 9,
  },
  {
    title: "Twilight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Stephenie Meyer ",
    rating: 10,
  },
  {
    title: "The Book Thief ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Markus Zusak",
    rating: 7,
  },
  {
    title: "The Chronicles of Narnia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "C.S. Lewis",
    rating: 8,
  },
  {
    title: "Animal Farm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "George Orwell",
    rating: 9,
  },
  {
    title: "Gone with the Wind ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Margaret Mitchell",
    rating: 10,
  },
  {
    title: "The Fault in Our Stars ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "John Green",
    rating: 8,
  },
];

Book.create(books)
  .then((booksFromDB) => {
    console.log(`Created ${booksFromDB.length} books`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting books from the DB: ${err}`)
  );
