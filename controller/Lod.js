const  Lody = require('../model/Lod')

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
exports.AddClientController = (req,res,next)=>{
    Lody.fetchAll()
    .then(([rows,filds])=>{
    res.render('client', {
        smaki: rows,
        Head: 'Client',
        path: '/',
         });
    });
    
};