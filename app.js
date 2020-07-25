//express
const express = require("express");
const app = express();

//router
const router = require("./routes/index");

const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));

app.use('/', router)

//port server
const port = 3000;

app.listen(port, console.log('server is running on 3000'));
