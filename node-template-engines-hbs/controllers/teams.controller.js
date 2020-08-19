exports.renderTeams = (req, res) => {
  const data = {
    layout: false,
  };
  res.render("teams", data);
};
