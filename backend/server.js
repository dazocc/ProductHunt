const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//inicia o ap
const app = express();

//aceitar json
app.use(express.json());
//aceitar requisicao de outros dominios
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/backendph', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//leitura de todos os models para o mongoose
requireDir('./src/models');

//rotas
app.use('/api', routes);

app.listen(3001);
