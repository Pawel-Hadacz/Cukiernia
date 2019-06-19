const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/add-creams',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','editing.html'));
   });
router.post('/creams',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;