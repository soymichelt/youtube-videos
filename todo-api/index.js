const express = require('express');
const cors = require('cors')
const todosRouter = require('./controllers/todo.controller');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/todos', todosRouter);

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});