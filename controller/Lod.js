const  Lody = require('../model/Lod')
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
    Lody.fetchAll(smak => {
      res.render('creams', {
        smaki: smak,
        Head: 'Lody',
        path: '/'
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
      });
   }

exports.AddLodController = (req,res,next)=>{
    res.render('editing', {
        Head: 'Editing',
        path: '/editing',
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

    
