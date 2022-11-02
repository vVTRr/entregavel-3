var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var body = req.body;
var resultado = soma(body.a, body.b);
var resultado = divisão(body.a, body.b);
var resultado = multiplicação(body.a, body.b);
var resultado = subtração(body.a, body.b);


res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

function soma(a, b) {
  return a + b;
}

function subtração(a, b) {
  return a - b;
}

function divisão(a, b) {
  return a / b;
}

function multiplicação(a, b) {
  return a * b;
}