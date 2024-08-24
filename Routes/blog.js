const { Router } = require("express");

const {
  handleAddPost,
  handleBlog,
  handleComment,
} = require("../Components/blog");

const router = Router();

router.get("/add-new", (req, res) => {
  return res.render("addBlog", { user: req.user });
});

router.post("/", handleAddPost);

router.get("/:id", handleBlog);

router.post("/:id/comments", handleComment);

module.exports = router;
