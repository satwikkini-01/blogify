const JWT = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRETKEY;

function generateToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    fullName: user.fullName,
    profilePic: user.profilePicURL,
    role: user.role,
  };

  const token = JWT.sign(payload, secret);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  generateToken,
  validateToken,
};
