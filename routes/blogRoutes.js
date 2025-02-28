const express = require("express");
const {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

// Define Routes
router.post("/create", createBlog); // Create
router.get("/", getAllBlogs); // Read
router.put("/:id", updateBlog); // Update
router.delete("/:id", deleteBlog); // Delete

module.exports = router;
