const Blog = require("../Models/blog");
const Comment = require("../Models/comment");

async function handleAddPost(req, res) {
  const { title, body } = req.body;
  const blog = await Blog.create({
    title,
    body,
    createdBy: req.user._id,
    coverImageURL: `/blog.png`,
  });
  return res.redirect(`/blog/${blog._id}`);
}

async function handleBlog(req, res) {
  const blog = await Blog.findOne({ _id: req.params.id }).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy"
  );
  return res.render("blogPage", { user: req.user, blog, comments });
}

async function handleComment(req, res) {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.id,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.id}`);
}

module.exports = {
  handleAddPost,
  handleBlog,
  handleComment,
};
