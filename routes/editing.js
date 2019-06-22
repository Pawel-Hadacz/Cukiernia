const path = require('path');
const express = require('express');
const router = express.Router();
const LodyControllery = require('../controller/Lod');
const DisplayControllery = require('../controller/display');
const {check} = require = require('express-validator/check');

//router.get('/add-creams',LodyControllery.AddCreams);
//router.post('/creams',LodyControllery.AddedCreams);
router.get('/add-creams',LodyControllery.AddLodController);
router.post('/add-creams',LodyControllery.AddLodController2);
router.post('/creams',LodyControllery.ToDBController);
//router.post('/add-creams',check('smak').isString(),check('cena').isDecimal(),check('waga').isDecimal(),check('dataWaznosci').isAscii(),LodyControllery.ToDBController)

module.exports = router;