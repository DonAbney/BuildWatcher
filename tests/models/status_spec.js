var Status = require('../../models/status');
var BoardState = require('../../models/boardState');

describe('Status: ', function() {

  var req;

  beforeEach(function() {
    global.boardStateContainer = null;
    req = {
      "body": {
        "build": {
          "buildStatus": "Compilation error: javac2",
          "buildResult": "failure"
        }
      }
    };
  });

  describe('setStatus: ', function() {
    it('sets the status to the new value', function() {
      var status = new Status();

      spyOn(BoardState.prototype, 'setBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.setBoardState).toHaveBeenCalledWith(jasmine.any(Object), 'failure');
    });

    it('gets the initial board state if none exists', function() {
      var status = new Status();

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.initBoardState).toHaveBeenCalled();
    });

    it('gets the initial board state if none exists', function() {
      var status = new Status();

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.initBoardState).toHaveBeenCalled();
    });

    it('uses the global board state if it exists', function() {
      global.boardStateContainer = {yer: 'momma'}
      var status = new Status();

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.initBoardState).not.toHaveBeenCalled();
    });
  })
})
