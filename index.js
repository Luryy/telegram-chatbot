const conexao = require('./infra/conexao.js');
const Tables = require('./infra/tables.js');

var http = require('http');

var port = process.env.PORT || 3000;

require('./bot/init-bots.js')();

conexao.getConnection(erro => {

    if(erro) {
        console.log(erro)
    } else {
    console.log('connected');
    Tables.init(conexao);
    http.createServer(function(req,res){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({name: 'teste-bot', ver: '1.0.0'}));
        res.end();
    }).listen(port)}
});