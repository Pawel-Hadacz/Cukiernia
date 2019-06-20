const path = require('path');
const express = require('express');
const router = express.Router();
const Lody = [];

router.get('/add-creams',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','editing.html'));
   });
router.post('/creams',(req,res,next)=>{
    Lody.push({nazwa: req.body.nazwa});
    res.redirect('/');
});
exports.routes = router;
exports.Lody = Lody;