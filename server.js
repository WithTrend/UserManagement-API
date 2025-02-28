const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 5001;

// Middleware to parse JSON (for handling request bodies)
app.use(express.json());

// Establish MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routing (importing routes)
app.use("/api/blogs", blogRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
