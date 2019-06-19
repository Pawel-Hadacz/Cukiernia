
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const editing = require('./routes/editing');
const client = require('./routes/client');

app.use(bodyparser.urlencoded({extended:false}));

app.use(editing);
app.use(client);

app.use((req,res,next)=>{
    res.status(404).send("<h1>404 ERROR</h1>")
})

app.listen(3000);