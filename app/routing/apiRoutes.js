var path = require("path");

var friends = require('../data/friends.js');

module.exports = function(app){

//get all friends
app.get("/api/friends", function(req, res){
    return res.json(friends)
})

//survey post route
app.post("/api/friends", function(req, res){
    
    //storing user input to var to use later
    var userInput = req.body;



})

}