const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ColorCMD = require('./../../ColorCMD');
const variables = require('./variables');

const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

// Rotas
const Pessoa = require('./../routes/Pessoa-routes');

// Conexão com o banco
mongoose.connect(variables.Database.connection, { useNewUrlParser: true, useFindAndModify: false })
.then(() => {
    ColorCMD('blue', 'black', '[mongoose] Conectado');
})
.catch((err) => {
    ColorCMD('red', 'black', `Erro: ${err}`);
});

// Configuração de parse do JSON
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Configurando as rotas
app.use('/api/pessoa', Pessoa);

// Exportanto a api
module.exports = app;
