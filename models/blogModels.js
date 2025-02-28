const mongoose = require("mongoose");

// Define Schema
const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Create Model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
