const util = require('./../util');

class MarcaValidation {
    async getById(req, res, next) {
        if (!req.body._id || !req.body._id.length > 0) return res.status(200).json({ success: false, msg: 'Campo _id obrigatório*' });
        else next();
    }

    async post(req, res, next) {
        let msg = [];

        if (!req.body.nome || !req.body.nome.length > 0) msg.push('Campo nome obrigatório*');
        if (!req.body.sobrenome || !req.body.sobrenome.length > 0) msg.push('Campo sobrenome obrigatório*');

        if (!req.body.cpf || !req.body.cpf.length > 0) msg.push('Campo cpf obrigatório*');
        else if (!util.cpfValidation(req.body.cpf)) msg.push('Cpf inválido');

        if (msg.length > 0) return res.status(400).json({ success: false, msg: msg });
        else next();
    }

    async put(req, res, next) {
        let msg = [];

        if (!req.body._id || !req.body._id.length > 0) msg.push('Campo id obrigatório*');
        if (!req.body.nome || !req.body.nome.length > 0) msg.push('Campo nome obrigatório*');
        if (!req.body.sobrenome || !req.body.sobrenome.length > 0) msg.push('Campo sobrenome obrigatório*');

        if (!req.body.cpf || !req.body.cpf.length > 0) msg.push('Campo cpf obrigatório*');
        else if (!util.cpfValidation(req.body.cpf)) msg.push('Cpf inválido');

        if (msg.length > 0) return res.status(400).json({ success: false, msg: msg });
        else next();
    }

    async delete(req, res, next) {
        if (!req.body._id || !req.body._id.length > 0) return res.status(200).json({ success: false, msg: 'Campo _id obrigatório*' });
        else next();
    }
}

module.exports = new MarcaValidation();