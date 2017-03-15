var express = require('express')
router = express.Router()

router.use('/status', require('./statusRouter'))

module.exports = router
