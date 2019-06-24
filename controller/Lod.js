const  Lody = require('../model/Lod')
const {validationResult} = require('express-validator/check');

exports.FromDBlody = (req, res, next) => {
    Lody.fetchAll(smak => {
      res.render('creams', {
        smaki: smak,
        Head: 'Lody',
        path: '/',
        zalogowany: req.isCookie
      });
    });
  };
  exports.postDelete = (req, res, next) => {
    const smak = req.body.smak;
    lod.delete(smak);
    res.redirect('/');
  };
  exports.UsunLodyKontroler = (req,res,next)=>{
    res.render('usunlody', {
        Head: 'usuwanie lodów',
        path: '/usunlody',
        zalogowany: req.isCookie
      });
   }

exports.AddLodController = (req,res,next)=>{
    res.render('editing', {
        Head: 'Editing',
        path: '/editing',
        zalogowany: req.isCookie
      });
   }
   exports.postDelete = (req, res, next) => {
    const id = req.body.id;
    const smak = req.body.smak;
    const cena = req.body.cena;
    const waga = req.body.waga;
    const dataWaznosci = req.body.dataWaznosci;
    const FK_idCukiernik = req.body.FK_idCukiernik;
    const lod = new Lody(id,smak, cena, waga, dataWaznosci,FK_idCukiernik);
     
    lod.delete();
    console.log(lod);
    res.redirect('/');
  };
    exports.AddLodController2 = (req,res,next)=>{
    const valid = validationResult(req);
    if(!valid.isEmpty()){
      console.log(valid.array());
      return res.render('editing', {
        
        Head: 'Editing',
        path: '/editing',
        zalogowany: req.isCookie
        
       
      });;
    }
    const smak = req.body.smak;
    const cena = req.body.cena;
    const waga = req.body.waga;
    const dataWaznosci = req.body.dataWaznosci;
    const FK_idCukiernik = req.body.FK_idCukiernik;
     const lod = new Lody(null,smak, cena, waga, dataWaznosci,FK_idCukiernik);
     console.log(lod);
     lod.save();
    res.redirect('/');
}
exports.ToDBController = (req, res, next) => {
    const e = validationResult(req);
    const smak = req.body.smak;
    const cena = req.body.cena;
    const waga = req.body.waga;
    const dataWaznosci = req.body.dataWaznosci;
    const lody = new Lody(smak, cena, waga, dataWaznosci);
    lody
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };

    
