var submitStatus = require('../../controllers/submitStatus');
var Status = require('../../models/status');

describe('SubmitStatus: ', function() {
  describe('POST', function() {
    it('replies to the POST with a success message', function() {
      var req, res;
      req = {
        "body": {
	  "build": {
	    "buildStatus": "Compilation error: javac2",
	    "buildResult": "failure"
	  }
	}
      };

      res = {
        sendStatus: function() {}
      };

      spyOn(res, 'sendStatus');

      submitStatus(req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(200);
    })
  
    it('routes to the correct model with the request', function() {
      var req, res;
      req = {
        "body": {
	  "build": {
	    "buildStatus": "Compilation error: javac2",
	    "buildResult": "failure"
	  }
	}
      };

      res = {
        sendStatus: function() {}
      };

      spyOn(Status.prototype, 'setStatus');

      submitStatus(req, res);

      expect(Status.prototype.setStatus).toHaveBeenCalledWith(req);
    })
  })
})
