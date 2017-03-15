var Status = require('../models/status');

function submitStatus(req, res) {
  var status = new Status();
  status.setStatus(req);
  res.sendStatus(200);
}

module.exports = submitStatus;
