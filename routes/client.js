const path = require('path');
const express = require('express');
const router = express.Router();
const LodyStore = require('./editing');
const LodyControllery = require('../controller/Lod');
const DisplayControllery = require('../controller/display');
const {check} = require = require('express-validator/check');


router.get('/',DisplayControllery.AddClientController);
router.get('/creams',DisplayControllery.getCreams);
router.get('/cukiernicy',DisplayControllery.getCukiernik);
router.get('/',DisplayControllery.AddClientCukiernikController);
module.exports = router;    