exports.Cookie = (req, res, next) => {
   const isCookie = req.get('Cookie');
    res.render('cookie', {
      path: '/cookie',
      Head: 'Cookie',
      zalogowany: isCookie
      
    });
  };
  
  exports.Cookied = (req, res, next) => {
   res.setHeader('Set-Cookie', 'isCookie=true; HttpOnly');
   
    res.redirect('/');
  };
  