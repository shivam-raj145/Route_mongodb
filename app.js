const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

// view setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => console.log("Successfully connected to DB ✅"))
  .catch((err) => console.log(err));

// route
app.get("/", (req, res) => {
  res.send("working 🚀");
});

// server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});