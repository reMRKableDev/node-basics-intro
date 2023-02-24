const express = require("express"); // loading package express

const { readIndexHtml } = require("../controllers/home.controllers"); // loading logic for routing

const router = express.Router(); // creating a Router object

router.get("/", readIndexHtml); // defining what happens if we receive a get request at  '/' endpoint

module.exports = router; // exporting the router
