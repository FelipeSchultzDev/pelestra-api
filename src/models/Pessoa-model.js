const mongoose = require('mongoose');

const Pessoa = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    cpf: { type: String, required: true, validate: [{
        validator: async res => {
            let search = await mongoose.model('Pessoa').find({ cpf: res });

            if (search.length > 0) return false;
        },
        msg: 'A marca já está cadastrada'
    }]
},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Pessoa', Pessoa);