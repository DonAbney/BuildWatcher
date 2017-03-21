var mraa = require('mraa');

var redPin = new mraa.Gpio(38);
var yellowPin = new mraa.Gpio(50);
var greenPin = new mraa.Gpio(37);

var BoardController = function() {};

BoardController.prototype.writeBoardState = function(newBoardState) {

  redPin.dir(mraa.DIR_OUT);
  yellowPin.dir(mraa.DIR_OUT);
  greenPin.dir(mraa.DIR_OUT);

  redPin.write(newBoardState.redPin.value);
  yellowPin.write(newBoardState.yellowPin.value);
  greenPin.write(newBoardState.greenPin.value);

};

module.exports = BoardController;
