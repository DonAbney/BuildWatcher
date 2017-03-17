var BoardState = require('./boardState');
var Status = function() {};

Status.prototype.setStatus = function(req) {

  var buildResult = req.body.build.buildResult;
  var boardState = new BoardState();

  //set the new board state
  boardState.setBoardState(buildResult); 
  
  //write the board state

};

module.exports = Status;
