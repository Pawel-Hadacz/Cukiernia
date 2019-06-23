const  Cukiernik = require('../model/Cukiernik')
const {validationResult} = require('express-validator/check');
/* exports.AddCreams = (req, res, next) => {
    const isAdded = req
    .get('Cookie')
    .split(';')[1]
    .trim()
    .split('=')[1];
    res.render('/add-creams', {
      Head: 'Adding',
      path: '/editing',
      isAuthenticated: isAdded
     
    });
  };
  exports.AddedCreams = (req, res, next) => {
    res.setHeader('Set-Cookie', 'isAdded=true');
    res.redirect('/');
  };
*/
exports.FromDBlody = (req, res, next) => {
    Cukiernik.fetchAll(nazwa => {
      res.render('creams', {
        smaki: smak,
        Head: 'Lody',
        path: '/'
      });
    });
  };

exports.DodajKontrolerCukienika = (req,res,next)=>{
    res.render('dodajcukiernika', {
        Head: 'dodawanie cukiernika',
        path: '/dodajcukiernika',
      });
   }
    exports.DodajCukiernikaDoBazy = (req,res,next)=>{
    const imie = req.body.imie;
    const nazwisko = req.body.nazwisko;
    const wiek = req.body.wiek;
    const cukiernik = new Cukiernik(null,imie, nazwisko, wiek);
     console.log(cukiernik);
     cukiernik.save();
    res.redirect('/');
}


    
