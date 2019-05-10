const variables = {
    Api: {
        port: process.env.port || 3000,
    },
    Database: {
        connection: process.env.connection || 'mongodb://localhost/palestra',
    }
};

module.exports = variables;
