var submitStatus = require('../../controllers/submitStatus');

describe('Status: ', function() {
  describe('POST', function() {
    it('replies to the POST with a success message', function() {
      var req, res;
      req = {
        "body": {}
      };

      res = {
        sendStatus: function() {}
      };

      spyOn(res, 'sendStatus');

      submitStatus(req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(200);
    })
  })
})
