const express = require("express");
const router = express.Router();

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

  if(name != '' || email != '' || password != '' | password2 != ''){
    res.render('login')
  }
});

module.exports = router;
