const express = require("express");
const mongoose = require("mongoose");

const app = express();

const URI =
  "mongodb+srv://Ayush2000:ekxNL27-Rw6!ptW@c0.qbxcs.mongodb.net/TheFirst?retryWrites=true&w=majority";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  name: String,
});

const userAHS = new mongoose.model("users", userSchema);

app.get("/", function (req, res) {
  res.send("This works.");

  const newUser = new userAHS({
    userName: "Sukrant",
    password: "sukrantchandna",
    name: "suku",
  });

  newUser.save(() => {
    console.log("DATA ADDED");
  });
  userAHS.findOne({userName: 'Sukrant'}, function (err, abc) {console.log(abc)});
});

const port = 3001;
app.listen(port, () => {
  console.log("The server has been started.");
});
