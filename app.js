
//const fs = require('rs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded());

app.use('/add-creams',(req,res,next)=>{
    res.send('<form action="/creams" method="POST"><input type="text" name="nazwa"><button type="submit">Dodaj smak</button></input></form>')
    });
app.use('/creams',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next)=>{
   res.send('<p>strona glowna</p>')
    });

app.listen(3000);