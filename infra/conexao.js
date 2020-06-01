const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_SENHA,
    database: process.env.DB,
    multipleStatements: true  //para fazer mais de um pedido por vez
})



module.exports = pool