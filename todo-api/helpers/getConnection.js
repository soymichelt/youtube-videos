const Connection = require('tedious').Connection;

const configConnection = {
    server: 'todosappserver.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'adminapptodos',
            password: 'Channel321*',
        }
    },
    options: {
        encrypt: true,
        database: 'TodosDb',
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