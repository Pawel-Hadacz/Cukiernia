const db = require('./database/db');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views','views');

const Cukiernikstore = require('./routes/cukiernik')
const LodyStore = require('./routes/editing');
const client = require('./routes/client');
const cookie = require('./routes/cookie');

db.execute('SELECT * FROM Cukiernik')
.then(result=>{
    console.log(result[0],result[1]);
})
.catch(err=>{
    console.log(err)
});

db.execute('SELECT * FROM Lody')
.then(result=>{
    console.log(result[0],result[1]);
})
.catch(err=>{
    console.log(err)
});

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(LodyStore);
app.use(client);
app.use(Cukiernikstore);
app.use(cookie);

app.use((req,res,next)=>{
    res.status(404).send("<h1>404 ERROR</h1>")
})

app.listen(3080);