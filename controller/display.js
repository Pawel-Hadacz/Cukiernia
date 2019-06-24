const Lody = require('../model/Lod');
const Cukiernik = require('../model/Cukiernik');


exports.getCreams = (req, res, next) => {
    Lody.fetchAll()
      .then(([smak, field]) => {
        res.render('creams', {
          smaki: smak,
          Head: 'CREAMS',
          path: '/creams',
          zalogowany: req.isCookie
        });
      })
      .catch(err => console.log(err));
  };
  exports.getCukiernik = (req, res, next) => {
    Cukiernik.fetchAll()
      .then(([c, field]) => {
        res.render('cukiernicy', {
          cuk: c,
          Head: 'Cukiernicy',
          path: '/cukiernicy',
          zalogowany: req.isCookie
          });
        
      })
      .catch(err => console.log(err));
  };
  exports.postDelete = (req, res, next) => {
    
    const smak = req.body.smak;
    const cena = req.body.cena;
    const waga = req.body.waga;
    const dataWaznosci = req.body.dataWaznosci;
    const FK_idCukiernik = req.body.FK_idCukiernik;
     const lod = new Lody(null,smak, cena, waga, dataWaznosci,FK_idCukiernik);
     
    //lod.delete();
    console.log(lod);
    res.redirect('/');
  };

exports.AddClientController = (req,res,next)=>{
    Lody.fetchAll()
    .then(([smak,filds])=>{
    res.render('client', {
        smaki: smak,
        Head: 'Client',
        path: '/',
        zalogowany: req.isCookie
         });
    });
}
exports.AddClientCukiernikController = (req,res,next)=>{
  Cukiernik.fetchAll()
  .then(([c,filds])=>{
  res.render('client', {
      cuk: c,
      Head: 'Cukienikilod',
      path: '/',
      zalogowany: req.isCookie
       });
  });
}

