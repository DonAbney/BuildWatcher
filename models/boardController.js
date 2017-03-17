var mraa = require('mraa');

var redPin = new mraa.Gpio(11);
var yellowPin = new mraa.Gpio(12);
var greenPin = new mraa.Gpio(13);

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
