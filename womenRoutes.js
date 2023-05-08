const express = require("express");
const { showHello, women, showHour, createWoman } = require("./womenController");
const router = express.Router();

router.get('/', showHello);
router.get('/hello', showHello);
router.get('/women', women);
router.post('/women', createWoman)
router.get('/hour', showHour);


module.exports = router;