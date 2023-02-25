exports.renderContact = (_req, res) => res.render("contact");

exports.redirectName = (req, res) => {
  const { name } = req.body;
  res.redirect("/?name=" + name);
};
