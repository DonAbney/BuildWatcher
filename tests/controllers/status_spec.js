var submitStatus = require('../../controllers/submitStatus');

describe('Status: ', function() {
  describe('POST', function() {
    it('replies to the POST with a success message', function() {
      var req, res;
      req = {
        "body": {}
      };

      res = {
        sendfile: function() {}
      };

      spyOn(res, 'sendFile');

      submitStatus(req, res);

      expect(res.sendFile).toHaveBeenCalled();
    })
  })
})
