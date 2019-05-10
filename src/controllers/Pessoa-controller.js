const Pessoa = require('../models/Pessoa-model');

class PessoaController {
    async getById(req, res) {
        Pessoa.findById(req.body._id)
        .then(response => {
            return res.status(200).json({ success: true, pessoa: response });
        })
        .catch(err => {
            let msg = '';
            if (err.message.search('Cast to ObjectId failed for value') >= 0)
                msg = 'Não foi encontrada nenhuma pessoa com esse ID!';
            else msg = 'Erro';

            return res.status(400).json({ success: false, msg: msg });
        });

    }

    async getAll(req, res) {
        Pessoa.find()
        .then(response => {
            return res.status(200).json({ success: true, pessoas: response });
        })
        .catch(() => {
            return res.status(400).json({ success: true, msg: 'Erro' });
        });
    }

    async post(req, res) {
        Pessoa.create(req.body)
        .then(() => {
            return res.status(200).json({ success: true, msg: 'Pessoa criada' });
        })
        .catch(() => {
            return res.status(400).json({ success: false, msg: 'Erro' });
        });
    }

    async put(req, res) {
        Pessoa.updateOne({ _id: req.body._id }, req.body)
        .then(() => {
            return res.status(200).json({ success: true, msg: 'Pessoa atualizada com sucesso' });
        })
        .catch(err => {
            let msg = '';
            if (err.message.search('Cast to ObjectId failed for value') >= 0)
                msg = 'Não foi encontrada nenhuma pessoa com esse ID!';
            else msg = 'Erro';

            return res.status(400).json({ success: false, msg: msg });
        });
    }

    async delete(req, res) {
        Pessoa.deleteOne({ _id: req.body._id })
        .then(() => {
            return res.status(200).json({ success: true, msg: 'Pessoa removida com sucesso' });
        })
        .catch(err => {
            let msg = '';
            if (err.message.search('Cast to ObjectId failed for value') >= 0)
            msg = 'Não foi encontrada nenhuma pessoa com esse ID!';
            else msg = 'Erro';

            return res.status(400).json({ success: false, msg: msg });
        });
    }
}

module.exports = new PessoaController();