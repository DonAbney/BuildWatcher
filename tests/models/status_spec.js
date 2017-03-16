var Status = require('../../models/status');
var BoardState = require('../../models/boardState');

describe('Status: ', function() {

  describe('setStatus: ', function() {
    it('sets the status to the new value', function() {
      var status = new Status();
      var req = {
        "body": {
          "build": {
	    "buildStatus": "Compilation error: javac2",
            "buildResult": "failure"
	  }
        }
      };

      spyOn(BoardState.prototype, 'setBoardState');

      status.setStatus(req);

      expect(BoardState.prototype.setBoardState).toHaveBeenCalledWith('failure');
    })
  })
})
