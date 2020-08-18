var path = require("path");

var friends = require("../data/friends.js");

module.exports = function (app) {
  //get all friends
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  //survey post route
  app.post("/api/friends", function (req, res) {
    //storing user input to var to use later
    var user = req.body;

    // parseInt for scores
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }
  

  // default friend match is the first friend but result will be whoever has the minimum difference in scores
  var bestFriendIndex = 0;
  var minDiff = 40;

 //comparing scores to the array of friend's scores
  for(var i = 0; i < friends.length; i++) {
    var totalDiff = 0;
    for(var j = 0; j < friends[i].scores.length; j++) {
      var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
      totalDiff += difference;
    }

    // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
    if(totalDiff < minDiff) {
      bestFriendIndex = i;
      minDiff = totalDiff;
    }
  }

  // after finding match, add user to friend array
  friends.push(user);

  // send back to browser the best friend match
  res.json(friends[bestFriendIndex]);
});
};


