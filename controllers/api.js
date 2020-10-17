const express = require('express');


const router = express.Router();



router.get('/v1', (req, res) => {
  res.json({
    message: "api v1",
  })
})

module.exports = router;