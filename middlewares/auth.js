const { validateToken } = require("../Services/auth");

function checkForAuth(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) return next();

    try {
      const payload = validateToken(tokenCookieValue);
      req.user = payload;
    } catch (error) {}
    return next();
  };
}

module.exports = {
  checkForAuth,
};
