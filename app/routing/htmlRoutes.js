var path = require("path");

module.exports = function (app) {
  //homepage render
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  //survey render
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
};
