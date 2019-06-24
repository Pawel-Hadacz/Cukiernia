const express = require('express');
const  Cookiekontroler = require('../controller/cookie');
const router = express.Router();

router.get('/cookie', Cookiekontroler.Cookie);

router.post('/cookie', Cookiekontroler.Cookied);

module.exports = router;