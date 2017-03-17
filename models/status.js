var BoardState = require('./boardState');
var Status = function() {};

Status.prototype.setStatus = function(req) {

  var buildResult = req.body.build.buildResult;
  var boardState = new BoardState();

  if (!global.boardStateContainer) {
    global.boardStateContainer = boardState.initBoardState();
  }
  //set the new board state
  boardState.setBoardState(global.boardStateContainer, buildResult); 
  
  //write the board state

};

module.exports = Status;
