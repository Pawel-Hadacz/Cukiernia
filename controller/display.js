const Lody = require('../model/Lod');
const Cukiernik = require('../model/Cukiernik');


exports.getCreams = (req, res, next) => {
    Lody.fetchAll()
      .then(([smak, field]) => {
        res.render('creams', {
          smaki: smak,
          Head: 'CREAMS',
          path: '/creams'
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
          });
        
      })
      .catch(err => console.log(err));
  };

exports.AddClientController = (req,res,next)=>{
    Lody.fetchAll()
    .then(([smak,filds])=>{
    res.render('client', {
        smaki: smak,
        Head: 'Client',
        path: '/',
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
       });
  });
}

