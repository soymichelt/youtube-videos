const execQuery = require('./../helpers/execQuery');
const TYPES = require('tedious').TYPES;

const addTodo = (todoData) => {
    const {
        todoID,
        author,
        todoDate,
        description,
        state,
    } = todoData;

    const query = `
        INSERT [dbo].[Todos] (TodoID, Author, TodoDate, TodoDescription, TodoState)
        OUTPUT INSERTED.TodoID
        VALUES (@todoID, @author, @todoDate, @description, @state);
    `;
    const parameters = [
        {name: 'todoID', type: TYPES.UniqueIdentifier, value: todoID},
        {name: 'author', type: TYPES.VarChar, value: author},
        {name: 'todoDate', type: TYPES.DateTime, value: todoDate},
        {name: 'description', type: TYPES.VarChar, value: description},
        {name: 'state', type: TYPES.SmallInt, value: state},
    ];

    return execQuery.execWriteCommand(query, parameters);
};

const updateTodo = (todoData) => {
    const {
        todoID,
        author,
        todoDate,
        description,
        state,
    } = todoData;

    const query = `
        UPDATE [dbo].[Todos]
        SET Author = @author, TodoDate = @todoDate, TodoDescription = @description, TodoState = @state
        WHERE TodoID = @todoID
    `;
    const parameters = [
        {name: 'todoID', type: TYPES.UniqueIdentifier, value: todoID},
        {name: 'author', type: TYPES.VarChar, value: author},
        {name: 'todoDate', type: TYPES.DateTime, value: todoDate},
        {name: 'description', type: TYPES.VarChar, value: description},
        {name: 'state', type: TYPES.SmallInt, value: state},
    ];

    return execQuery.execWriteCommand(query, parameters);
};

const completeTodo = (todoID) => {
    const query = `
        UPDATE [dbo].[Todos]
        SET TodoState = 2
        WHERE TodoID = @todoID
    `;
    const parameters = [
        {name: 'todoID', type: TYPES.UniqueIdentifier, value: todoID},
    ];

    return execQuery.execWriteCommand(query, parameters);
};

const deleteTodo = (todoID) => {
    const query = `
        DELETE FROM [dbo].[Todos]
        WHERE TodoID = @todoID
    `;
    const parameters = [
        {name: 'todoID', type: TYPES.UniqueIdentifier, value: todoID},
    ];

    return execQuery.execWriteCommand(query, parameters);
};

const allTodo = () => {
    const query = `
        SELECT * FROM Todos
    `;

    return execQuery.execReadCommand(query);
};

const getByIDTodo = (todoID) => {
    const query = `
        SELECT * FROM Todos
        WHERE TodoID = @todoID
    `;
    const parameters = [
        {name: 'todoID', type: TYPES.UniqueIdentifier, value: todoID},
    ];

    return execQuery.execReadCommand(query, parameters);
};

module.exports = {
    addTodo,
    updateTodo,
    completeTodo,
    deleteTodo,
    allTodo,
    getByIDTodo,
};