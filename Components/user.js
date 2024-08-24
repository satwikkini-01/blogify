const User = require("../Models/user");
const { generateToken } = require("../Services/auth");

async function handleSignup(req, res) {
  const { fullName, email, password } = req.body;

  await User.create({ fullName, email, password });
  return res.redirect("/");
}

async function handleSignin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.render("signin", { error: "Incorrect Email or Password" });
  }
  const token = generateToken(user);
  return res.cookie("token", token).redirect("/");
}

function handleLogout(req, res) {
  res.clearCookie("token");
  return res.redirect("/");
}

module.exports = {
  handleSignin,
  handleSignup,
  handleLogout,
};
