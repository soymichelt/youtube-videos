const Connection = require('tedious').Connection;

const dotenv = require('dotenv');
dotenv.config();

const {
    DATABASE_SERVER,
    DATABASE_AUTHENTICATION_TYPE,
    DATABASE_AUTHENTICATION_USERNAME,
    DATABASE_AUTHENTICATION_PASSWORD,
    DATABASE_OPTION_DATABASE,
} = process.env;

const configConnection = {
    server: DATABASE_SERVER,
    authentication: {
        type: DATABASE_AUTHENTICATION_TYPE,
        options: {
            userName: DATABASE_AUTHENTICATION_USERNAME,
            password: DATABASE_AUTHENTICATION_PASSWORD,
        }
    },
    options: {
        encrypt: true,
        database: DATABASE_OPTION_DATABASE,
        rowCollectionOnDone: true,
    }
};

const getConnection = () => {
    const connect = () => new Promise((resolve, reject) => {
        const connectionInstance = new Connection(configConnection);

        connectionInstance.on('connect', function(error) {
            if(!error) {
                resolve(connectionInstance);
            }
            else {
                reject(error);
            }
        });

        connectionInstance.connect();
    });

    return {connect};
};

module.exports = getConnection;