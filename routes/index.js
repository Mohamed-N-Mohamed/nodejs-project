const express = require('express');
const router = express.Router();

router.get('/users/register', (req, res) => {
  res.send('this is register route')
})






module.exports = router;
