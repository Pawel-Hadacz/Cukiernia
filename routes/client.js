const path = require('path');
const express = require('express');
const router = express.Router();
const LodyStore = require('./editing');

router.get('/',(req,res,next)=>{
    console.log('client.js',LodyStore.Lody);
    res.sendFile(path.join(__dirname,'../','views','client.html'));
     });

module.exports = router;    