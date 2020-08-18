// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

  module.exports = app;