//express
const express = require("express");
const app = express();

//router
const router = require("./routes/index");

//mongoose
const mongoose = require("mongoose");

const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

//db uri
const db = 'mongodb+srv://deku123:deku123@cluster0.knuyw.mongodb.net/Users?retryWrites=true&w=majority";'

// connect to mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use("/", router);

//port server
const port = 3000;

app.listen(port, console.log("server is running on 3000"));
