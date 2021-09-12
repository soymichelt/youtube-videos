const Connection = require('tedious').Connection;

const dotenv = require('dotenv');
dotenv.config();

const {
    SERVER,
    AUTHENTICATION_TYPE,
    AUTHENTICATION_USERNAME,
    AUTHENTICATION_PASSWORD,
    OPTION_ENCRYPT,
    OPTION_DATABASE,
    OPTION_ROW_COLLECTION_ON_DONE,
} = process.env;

const configConnection = {
    server: SERVER,
    authentication: {
        type: AUTHENTICATION_TYPE,
        options: {
            userName: AUTHENTICATION_USERNAME,
            password: AUTHENTICATION_PASSWORD,
        }
    },
    options: {
        encrypt: OPTION_ENCRYPT,
        database: OPTION_DATABASE,
        rowCollectionOnDone: OPTION_ROW_COLLECTION_ON_DONE,
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