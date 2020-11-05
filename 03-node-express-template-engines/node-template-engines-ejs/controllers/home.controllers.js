exports.renderIndex = (req, res) => {
  const { name } = req.query;
  res.render("index.ejs", { name });
};
