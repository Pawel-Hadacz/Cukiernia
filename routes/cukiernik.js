
const express = require('express');
const router = express.Router();
const CukiernikKontroler = require('../controller/Cukiernik');
const DisplayControllery = require('../controller/display');
const {check} = require = require('express-validator/check');


router.get('/dodajcukiernika',CukiernikKontroler.DodajKontrolerCukienika);
router.post('/dodajcukiernika',CukiernikKontroler.DodajCukiernikaDoBazy);
//router.post('/creams',LodyControllery.ToDBController);
//router.post('/add-creams',check('smak').isString(),check('cena').isDecimal(),check('waga').isDecimal(),check('dataWaznosci').isAscii(),LodyControllery.ToDBController)

module.exports = router;