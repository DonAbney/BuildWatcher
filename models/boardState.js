var BoardState = function() {};

BoardState.prototype.initBoardState = function() {

  var boardState = {};

  boardState['greenPin'] = {pin: 11, value: 0};
  boardState['yellowPin'] = {pin: 12, value: 0};
  boardState['redPin'] = {pin: 13, value: 0};

  return boardState;
};

BoardState.prototype.setBoardState = function(boardState, buildState) {

  switch (buildState) {
    case 'success':
      boardState['greenPin'].value = 1;
      break;
    case 'warning':
      boardState['yellowPin'].value = 1;
      break;
    case 'failure':
      boardState['redPin'].value = 1;
      break;
    default:
      console.log('Invalid build state received: ' + buildState);
  }

  return boardState;
};

module.exports = BoardState;
