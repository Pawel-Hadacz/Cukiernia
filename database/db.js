const mysql = require('mysql2');

const con = mysql.createPool({
    host:'127.0.0.1',
    port:'3308',
    user:'root',
    password:'password',
    database:'tin'
});
module.exports = con.promise();