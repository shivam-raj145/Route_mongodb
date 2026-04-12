const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const Student=require("./models/student.js");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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


app.get("/", (req, res) => {
  res.send("working 🚀");
});

app.get("/user", async (req, res) => {
   const users = await Student.find();
  //  console.log(users);
   res.render("index.ejs",{users});
});

// editing route

app.get("/user/:id/edit",async(req,res)=>{
  let {id}=req.params;
  const [user]=await Student.find({_id:id});
  // console.log(user)
  
  res.render("edit.ejs",{user});
});
app.patch("/user/:id", async (req,res)=>{
  const {id}=req.params;
  console.log(id);
  let{username,password}=req.body;
  const [user]= await Student.find({_id:id});
  if(user.password==password){
    await Student.updateOne({_id:id},{name:username});
    res.redirect("/user");
  }
  else{ res.render("wrongPassword.ejs",{user}); }
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});