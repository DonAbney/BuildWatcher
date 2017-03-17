var BoardState = require('./boardState');
var BoardController = require('./boardController');
var Status = function() {};

Status.prototype.setStatus = function(req) {

  var buildResult = req.body.build.buildResult;
  var boardState = new BoardState();
  var boardController = new BoardController();

  if (!global.boardStateContainer) {
    global.boardStateContainer = boardState.initBoardState();
  }
  //set the new board state
  global.boardStateContainer = boardState.setBoardState(global.boardStateContainer, buildResult); 
  
  //write the board state
  boardController.writeBoardState(global.boardStateContainer);

};

module.exports = Status;
