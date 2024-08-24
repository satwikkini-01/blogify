const { Router } = require("express");
const {
  handleSignin,
  handleSignup,
  handleLogout,
} = require("../Components/user");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", handleSignin);

router.post("/signup", handleSignup);

router.get("/logout", handleLogout);

module.exports = router;
