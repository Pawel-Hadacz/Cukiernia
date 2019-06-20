const path = require('path');
const express = require('express');
const router = express.Router();
const LodyControllery = require('../controller/Lod');


router.get('/add-creams',LodyControllery.AddLodController);
router.post('/add-creams',LodyControllery.AddLodController2);

module.exports = router;