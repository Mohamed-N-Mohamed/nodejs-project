//express
const express = require("express");
const app = express();

//router
const router = require("./routes/index");


app.use('/', router)

//port server
const port = 3000;

app.listen(port, console.log('server is running on 3000'));
