const express = require("express");
const peopleRouter = express.Router();

const {
  readUsers,
  createUsers,
  updateUsers,
  deleteUsers
} = require("./controllers/routeControllers");

/* ROUTES */
peopleRouter.get("/", readUsers);

peopleRouter.post("/", createUsers);

peopleRouter.put("/:id", updateUsers);

peopleRouter.delete("/:id", deleteUsers);

module.exports = peopleRouter;
