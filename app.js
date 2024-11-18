var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var loginRouter = require("./routes/login");
var concertsRouter = require("./routes/concerts");
var usersRouter = require("./routes/users");
var reservationsRouter = require("./routes/reservations");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(loginRouter, concertsRouter, usersRouter, reservationsRouter);

module.exports = app;
