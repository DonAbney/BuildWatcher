var Status = require('../../models/status');
var BoardState = require('../../models/boardState');
var BoardController = require('../../models/boardController');

describe('Status: ', function() {

  var req;

  beforeEach(function() {
    global.boardStateContainer = null;
    req = {
      "body": {
        "build": {
          "buildStatus": "Compilation error: javac2",
          "buildResult": "failure",
	  "branchName": "<default>"
        }
      }
    };
  });

  describe('setStatus: ', function() {
    it('sets the status to the new value', function() {
      var status = new Status();
      global.boardStateContainer = {yer: 'momma'}

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');
      spyOn(BoardController.prototype, 'writeBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.setBoardState).toHaveBeenCalledWith(jasmine.any(Object), 'failure');
    });

    it('gets the initial board state if none exists', function() {
      var status = new Status();

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');
      spyOn(BoardController.prototype, 'writeBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.initBoardState).toHaveBeenCalled();
    });

    it('gets the initial board state if none exists', function() {
      var status = new Status();

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');
      spyOn(BoardController.prototype, 'writeBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.initBoardState).toHaveBeenCalled();
    });

    it('leaves state unchanged if not master', function() {
      var status = new Status();

      req.body.build.branchName = 'charlie';
      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');
      spyOn(BoardController.prototype, 'writeBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.setBoardState).not.toHaveBeenCalled();
      expect(BoardController.prototype.writeBoardState).not.toHaveBeenCalled();
    });

    it('uses the global board state if it exists', function() {
      global.boardStateContainer = {yer: 'momma'}
      var status = new Status();

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');
      spyOn(BoardController.prototype, 'writeBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.initBoardState).not.toHaveBeenCalled();
    });

    it('writes the new state to the board', function() {
      var status = new Status();

      spyOn(BoardState.prototype, 'initBoardState');
      spyOn(BoardState.prototype, 'setBoardState');
      spyOn(BoardController.prototype, 'writeBoardState');

      status.setStatus(req);

      expect(BoardController.prototype.writeBoardState).toHaveBeenCalled();
    });
  })
})
