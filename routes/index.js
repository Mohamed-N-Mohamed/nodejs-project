const express = require("express");
const router = express.Router();
const User = require("../mongo/Mongo");
const { render } = require("ejs");

router.get("/", (req, res) => {
  res.send("this is register home");
});

router.get("/users/register", (req, res) => {
  res.render("register");
});

router.get("/users/login", (req, res) => {
  res.render("login");
});

router.post("/users/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  if (!name && !email && !password && !password2) {
    //if all fields are empty
    res.render("register");
  } else if (password.length < 8) {
    //password must be greater than 8 characters
    res.render("register", {
      password,
    });
  } else if (password !== password2) {
    //password must match password2
    res.render("register", {
      password,
      password2,
    });
  } else {
    //check if there is the same email address.
    User.findOne({
      email: email,
    }).then((email) => {
      if (email) {
        res.render("register");
      } else {
        //save data if there is no smilar email address
        saveToDatabase(name, email, password, password2);
        //render login page
        res.render("login");
      }
    });
  }
});

function saveToDatabase(name, email, password, password2) {
  const newUser = new User({
    name,
    email,
    password,
    password2,
  });
  newUser.save(() => {
    console.log("saved to database");
  });
}

module.exports = router;
