const Lody = require('../model/Lod');


exports.getCreams = (req, res, next) => {
    Lody.fetchAll()
      .then(([rows, field]) => {
        res.render('creams', {
          smaki: rows,
          Head: 'CREAMS',
          path: '/creams'
        });
      })
      .catch(err => console.log(err));
  };

exports.AddClientController = (req,res,next)=>{
    Lody.fetchAll()
    .then(([rows,filds])=>{
    res.render('client', {
        smaki: rows,
        Head: 'Client',
        path: '/',
         });
    });
}

