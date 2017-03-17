var mraa = require('mraa');
var BoardState = function() {};

var boardState = {};

BoardState.prototype.initBoardState = function() {
  boardState['greenPin'] = {pin: 11, value: 0};
  boardState['yellowPin'] = {pin: 12, value: 0};
  boardState['redPin'] = {pin: 13, value: 0};    
};

BoardState.prototype.setBoardState = function(state) {

  //parse the correct status
  //set the new board state
  //write the board state
  //var pin8 = new mraa.Gpio(8);
  //pin8.dir(mraa.DIR_OUT);
  //pin8.write(1);
  this.initBoardState();

  switch (state) {
    case 'success':
      boardState['greenPin'].value = 1;
      break;
    case 'warning':
      boardState['yellowPin'].value = 1;
      break;
    case 'failure':
      boardState['redPin'].value = 1;
      break;
  }

  return boardState;
};

module.exports = BoardState;
