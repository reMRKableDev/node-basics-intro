const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"], // Scope specifies which user's Google information that you want your app to get access to
  })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/private-page",
    failureRedirect: "/", // here you would redirect to the login page using traditional login approach
  })
);

router.get("/private-page", (req, res) => {
  if (!req.user) {
    res.redirect("/"); // not logged-in
    return;
  }

  console.log(req.user);

  // ok, req.user is defined
  res.render("private", { user: req.user });
});

module.exports = router;
