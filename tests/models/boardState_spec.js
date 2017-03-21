var BoardState = require('../../models/boardState');

describe('BoardState: ', function() {

  var testBoardState;

  beforeEach(function() {
    testBoardState = {
      greenPin: {pin: 11, value: 0},
      yellowPin: {pin: 12, value: 0},
      redPin: {pin: 13, value: 0},
    }
    });

  describe('setBoardState: ', function() {
    it('sets the pin for the red light when failure', function() {
      var boardState = new BoardState();
      var buildState = 'failure';

      var actualResponse = boardState.setBoardState(testBoardState, buildState);

      expect(actualResponse.greenPin.value).toEqual(0);
      expect(actualResponse.yellowPin.value).toEqual(0);
      expect(actualResponse.redPin.value).toEqual(1);
    })

    it('sets the pin for the green light when success', function() {
      var boardState = new BoardState();
      var buildState = 'success';

      var actualResponse = boardState.setBoardState(testBoardState, buildState);

      expect(actualResponse.greenPin.value).toEqual(1);
      expect(actualResponse.yellowPin.value).toEqual(0);
      expect(actualResponse.redPin.value).toEqual(0);
    })

    it('sets the pin for the yellow light when warning', function() {
      var boardState = new BoardState();
      var buildState = 'running';

      var actualResponse = boardState.setBoardState(testBoardState, buildState);

      expect(actualResponse.greenPin.value).toEqual(0);
      expect(actualResponse.yellowPin.value).toEqual(1);
      expect(actualResponse.redPin.value).toEqual(0);
    })

    it('returns an initialized state container', function() {
      var boardState = new BoardState();

      var actualResponse = boardState.initBoardState();

      expect(actualResponse.greenPin.value).toEqual(0);
      expect(actualResponse.yellowPin.value).toEqual(0);
      expect(actualResponse.redPin.value).toEqual(0);
    })

    it('takes no action for an unknown state', function() {
      var boardState = new BoardState();
      var buildState = 'yerMomma';
      testBoardState.greenPin.value = 1;

      var actualResponse = boardState.setBoardState(testBoardState, buildState);

      expect(actualResponse.greenPin.value).toEqual(1);
      expect(actualResponse.yellowPin.value).toEqual(0);
      expect(actualResponse.redPin.value).toEqual(0);
    })
  })
})
