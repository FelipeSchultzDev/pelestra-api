const app = require('./config/express');
const variables = require('./config/variables');
const ColorCMD = require('./../ColorCMD');

const server = app.listen(variables.Api, async () => {
    ColorCMD('purple', 'black', '[API] Rodando');
    ColorCMD('purple', 'black', `[API] Porta: ${variables.Api.port}`);
});
server.timeout = 30000;