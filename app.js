const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pessoaController = require('./pessoaController');

const app = express();
app.use(bodyParser.json());


app.post('/pessoas', pessoaController.createPessoa);
app.get('/pessoas', pessoaController.getPessoas);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
