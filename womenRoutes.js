const express = require("express");
const { showHello, women, showHour, createWoman, updateWoman, deleteWoman } = require("./womenController");
const router = express.Router();

router.get('/', showHello);
router.get('/hello', showHello);
router.get('/women', women);
router.post('/women', createWoman)
router.patch('/women/:id', updateWoman);
router.delete('/women/:id', deleteWoman);
router.get('/hour', showHour);


module.exports = router;