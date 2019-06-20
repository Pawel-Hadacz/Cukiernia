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

exports.AddLodController = (req,res,next)=>{
    res.render('editing', {
        Head: 'Editing',
        path: '/editing',
      });
   }
    exports.AddLodController2 = (req,res,next)=>{
     const lod  = new Lody(req.body.smak);
     lod.save();
    res.redirect('/');
}
exports.ToDBController = (req, res, next) => {
    const e = validationResult(req);
    const smak = req.body.smak;
    const cena = req.body.cena;
    const waga = req.body.waga;
    const dataWaznosci = req.body.dataWaznosci;
    const lody = new Lody(null, smak, cena, waga, dataWaznosci);
    lody
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };

    
