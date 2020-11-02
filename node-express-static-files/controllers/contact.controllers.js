const path = require("path");

exports.readContactHtml = (_, res) =>
  res.status(200).sendFile(path.join(__dirname, "../public/contact.html"));

exports.createName = (req, res) => res.status(200).json(req.body);
