const  Lody = [];

exports.AddLodController = (req,res,next)=>{
    res.render('editing', {
        Head: 'Editing',
        path: '/editing',
      });
   }
   exports.AddLodController2 = (req,res,next)=>{
    Lody.push({nazwa: req.body.nazwa});
    res.redirect('/');
}
exports.AddClientController = (req,res,next)=>{
    
    res.render('client', {
        smaki: Lody,
        Head: 'Client',
        path: '/',
        
         });
    }