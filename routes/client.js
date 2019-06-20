const path = require('path');
const express = require('express');
const router = express.Router();
const LodyStore = require('./editing');
const LodyControllery = require('../controller/Lod');

router.get('/',LodyControllery.AddClientController);
module.exports = router;    