const express = require("express");
const { showHello, women, showHour } = require("./womenController");
const router = express.Router();

router.get('/', showHello);
router.get('/hello', showHello);
router.get('/women', women);
router.get('/hour', showHour)

module.exports = router;