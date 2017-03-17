var BoardState = require('../../models/boardState');

describe('BoardState: ', function() {

  describe('setBoardState: ', function() {
    it('sets the pin for the red light when failure', function() {
      var boardState = new BoardState();
      var state = 'failure';

      var actualResponse = boardState.setBoardState(state);

      expect(actualResponse.greenPin.value).toEqual(0);
      expect(actualResponse.yellowPin.value).toEqual(0);
      expect(actualResponse.redPin.value).toEqual(1);
    })

    it('sets the pin for the green light when success', function() {
      var boardState = new BoardState();
      var state = 'success';

      var actualResponse = boardState.setBoardState(state);

      expect(actualResponse.greenPin.value).toEqual(1);
      expect(actualResponse.yellowPin.value).toEqual(0);
      expect(actualResponse.redPin.value).toEqual(0);
    })

    it('sets the pin for the yellow light when warning', function() {
      var boardState = new BoardState();
      var state = 'warning';

      var actualResponse = boardState.setBoardState(state);

      expect(actualResponse.greenPin.value).toEqual(0);
      expect(actualResponse.yellowPin.value).toEqual(1);
      expect(actualResponse.redPin.value).toEqual(0);
    })
  })
})
