const { Pessoa } = require('./models');

exports.createPessoa = async (req, res) => {
  try {
    console.log(req.body);
    const { nome, cpf, telefone } = req.body;
    const novaPessoa = await Pessoa.create({ nome, cpf, telefone });
    return res.status(201).json(novaPessoa);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao criar pessoa' });
  }
};

exports.getPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    return res.json(pessoas);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar pessoas' });
  }
};
