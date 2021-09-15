const todosRoute = require('express').Router();
const {v4: uuidv4} = require('uuid');
const todosModel = require('./../models/todo.model');
const {sendMessage} = require('./../helpers/slackNotification');

todosRoute.get('/', async (req, res) => {
    todosModel.allTodo()
        .then(data => {
            res.status(200).json({data: data});
        })
        .catch(error => {
            res.status(400).json({error});
        });
});

todosRoute.get('/:id', async (req, res) => {
    const {id: todoID} = req.params;
    todosModel.getByIDTodo(todoID)
        .then(data => {
            console.log(data);
            if(data.length > 0) {
                res.status(200).json({
                    data: {...data[0]},
                })
            }
            else {
                res.status(404).json({
                    error: 'No se encuentra esta tarea',
                });
            }
        })
        .catch(error => {
            res.status(400).json({error})
        })
});

todosRoute.post('/', async (req, res) => {
    const todoID = uuidv4();
    const {
        author,
        todoDate,
        description,
        state,
    } = req.body;
    todosModel.addTodo({
        todoID: todoID,
        author,
        todoDate,
        description,
        state,
    })
    .then((rowCount, more) => sendMessage(`"${author}" deberá hacer lo siguiente: ${description}`))
    .then(() => {
        res.status(200).json({
            data: { todoID },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.put('/:id', async (req, res) => {
    const {id: todoID} = req.params;
    const {
        author,
        todoDate,
        description,
        state,
    } = req.body;
    todosModel.updateTodo({
        todoID,
        author,
        todoDate,
        description,
        state,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.put('/:id/completed', async(req, res) => {
    const {id: todoID} = req.params;
    todosModel.completeTodo(todoID)
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
            }
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.delete('/:id', async (req, res) => {
    const {id: todoID} = req.params;
    todosModel.deleteTodo(todoID)
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

module.exports = todosRoute;