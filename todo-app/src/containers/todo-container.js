import React, { useEffect, useState, } from "react";
import { TodoForm } from './../components/todo-form';
import { TodoList } from "./../components/todo-list";
import { useInputField } from "../hooks/useInputField";

const API_URL = `${process.env.REACT_APP_API_URL}`;

console.log("Conectados a: ", API_URL);

export const TodoContainer = () => {

    const authorField = useInputField('');
    const descriptionField = useInputField('');

    const [todosData, setTodosData] = useState([]);
    const [loadingTodoList, setLoadingTodoList] = useState(true);
    const [loadingTodoEditing, setLoadingTodoEditing] = useState(false);
    const [todoSelected, setTodoSelected] = useState(null);
    const [todoCompleteId, setTodoCompleteId] = useState(null);
    
    useEffect(() => {
        if(loadingTodoList) {
            fetch(API_URL, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTodosData(data.data);
                setLoadingTodoList(false);
            })
            .catch(error => {
                console.log(error);
                setLoadingTodoList(false);
            });
        }
    }, [loadingTodoList]);

    const resetForm = () => {
        //clean fields
        authorField.update('');
        descriptionField.update('');
        setTodoSelected(null);
    };

    const handleSave = (todo, editMode = false) => {
        //fetching data
        const {todoID} = todo;
        setLoadingTodoEditing(true);
        fetch(!editMode ? API_URL : `${API_URL}/${todoID}`, {
            method: !editMode ? 'POST' : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoadingTodoEditing(false);
            setLoadingTodoList(true);
            resetForm();
        })
        .catch(error => {
            console.log(error);
            setLoadingTodoEditing(false);
        });
    };

    const handleDelete = (todoID) => {
        console.log(todoID);
        setLoadingTodoEditing(true);
        fetch(`${API_URL}/${todoID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log('Success delete >>> ', data);
            setLoadingTodoList(true);
            setLoadingTodoEditing(false);
            resetForm();
        })
        .catch(error => {
            console.log(error);
            setLoadingTodoEditing(false);
        });
    };

    const handleComplete = (todoID) => {
        setTodoCompleteId(todoID);
        fetch(`${API_URL}/${todoID}/completed`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            setTodoCompleteId(null);
            setLoadingTodoList(true);
        })
        .catch(error => {
            console.log(error);
            setTodoCompleteId(null);
        });
    };

    const handleEdit = (todo) => {
        authorField.update(todo.Author);
        descriptionField.update(todo.TodoDescription);
        setTodoSelected(todo);
    };

    return (
        <main>
            <TodoForm
                selected={todoSelected}
                authorField={authorField}
                descriptionField={descriptionField}
                disabledForm={loadingTodoEditing}
                onSave={handleSave}
                onDelete={handleDelete}
            />
            <TodoList
                loading={loadingTodoList}
                items={todosData}
                onEdit={handleEdit}
                onComplete={handleComplete}
                completeId={todoCompleteId}
                onEdit={handleEdit}
            />
        </main>
    );
};