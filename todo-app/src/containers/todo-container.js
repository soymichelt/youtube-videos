import React, { useEffect, useState, } from "react";
import { TodoForm } from '../components/modal-form/todo-form';
import { TodoSections } from "../components/sections";
import { useInputField } from "../hooks/useInputField";
import { BarLoading } from "../components/bar-loading";
import { Header } from "../components/header";

const API_URL = `${process.env.REACT_APP_API_URL}`;

const SECTIONS_LIST= [
    {sectionId: '1', name: 'ToDo',},
    {sectionId: '2', name: 'Work In Progress',},
    {sectionId: '3', name: 'Task Blocked',},
    {sectionId: '4', name: 'QA Testing',},
    {sectionId: '5', name: 'Done',},
];

export const TodoContainer = () => {

    const authorField = useInputField('');
    const descriptionField = useInputField('');

    const [todosData, setTodosData] = useState([]);
    const [loadingTodoList, setLoadingTodoList] = useState(true);
    const [loadingTodoEditing, setLoadingTodoEditing] = useState(false);
    const [todoSelected, setTodoSelected] = useState(null);
    const [todoCompleteId, setTodoCompleteId] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    
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
        if(todoSelected) setTodoSelected(null);
        setShowEditModal(false);
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
        setShowEditModal(true);
    };

    const handleChangeState = (todoID, state) => {
        fetch(`${API_URL}/${todoID}/changeState`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                state: state,
            }),
        })
        .then(res => res.json())
        .then(data => {
            setLoadingTodoList(true);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleDragEnd = (result) => {
        if(!result.destination) return;

        console.log(result);

        handleChangeState(result.draggableId, parseInt(result.destination.droppableId));
        
        const newTodoItems = [];
        todosData.forEach(item => {
            if(item.TodoID === result.draggableId) {
                newTodoItems.push({
                    ...item,
                    TodoState: parseInt(result.destination.droppableId)
                });
            }
            else {
                newTodoItems.push({
                    ...item
                });
            }
        });
        console.log("New Items Array >>> ", newTodoItems);
        setTodosData(newTodoItems);
    };

    return (
        <>
            {loadingTodoList && (
                <BarLoading />
            )}
            <Header
                onCreate={() => setShowEditModal(true)}
            />
            <main>
                <TodoForm
                    selected={todoSelected}
                    authorField={authorField}
                    descriptionField={descriptionField}
                    disabledForm={loadingTodoEditing}
                    onSave={handleSave}
                    onDelete={handleDelete}
                    isActive={showEditModal}
                    onClose={() => {
                        setShowEditModal(false);
                        resetForm();
                    }}
                />
                <TodoSections
                    loading={loadingTodoList}
                    items={todosData}
                    onEdit={handleEdit}
                    onComplete={handleComplete}
                    completeId={todoCompleteId}
                    sectionList={SECTIONS_LIST}
                    onDragEnd={handleDragEnd}
                />
            </main>
        </>
    );
};