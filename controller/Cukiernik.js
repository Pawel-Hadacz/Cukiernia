const  Cukiernik = require('../model/Cukiernik')
const {validationResult} = require('express-validator/check');

exports.FromDBlody = (req, res, next) => {
    Cukiernik.fetchAll(nazwa => {
      res.render('creams', {
        smaki: smak,
        Head: 'Lody',
        path: '/',
        zalogowany: req.isCookie
      });
    });
  };

exports.DodajKontrolerCukienika = (req,res,next)=>{
  res.isAdded = true;
    res.render('dodajcukiernika', {
        Head: 'dodawanie cukiernika',
        path: '/dodajcukiernika',
        zalogowany: req.isCookie
      });
   }
   
    exports.DodajCukiernikaDoBazy = (req,res,next)=>{
      const valid = validationResult(req);
    if(!valid.isEmpty()){
      console.log(valid.array());
      return res.render('dodajcukiernika', {
        Head: 'dodawanie cukiernika',
        path: '/dodajcukiernika',
        zalogowany: req.isCookie
       

      });
    }
    const imie = req.body.imie;
    const nazwisko = req.body.nazwisko;
    const wiek = req.body.wiek;
    const cukiernik = new Cukiernik(null,imie, nazwisko, wiek);
     console.log(cukiernik);
     cukiernik.save();
    res.redirect('/');
}


    
