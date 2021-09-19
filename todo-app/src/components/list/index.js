import React from 'react';
import LoadingImage from './../../assets/loading.svg';
import CompleteIcon from './../../assets/complete-icon-blue.svg';
import EditIcon from './../../assets/edit-icon-blue.svg';
import { Draggable } from 'react-beautiful-dnd';

export const TodoList = ({
    items,
    loading,
    onComplete,
    onEdit,
    completeId,
    provided,
    sectionName,
}) => {
    return (
        <>
            <div className="todo-container">
                <section
                    className={`todo ${loading ? 'todo-loading' : ''}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <header className='todo-container-title'>
                        {sectionName}
                    </header>
                    {(items && items.length > 0) && items.map((item, index) => {
                        const completing = completeId === item.TodoID;
                        return (
                            <Draggable
                                key={item.TodoID}
                                draggableId={`${item.TodoID}`}
                                index={index}
                            >
                                {(providedDrag) => (
                                    <article
                                        className={`todo-item ${item.TodoState === 5 ? 'todo-completed' : ''}`}
                                        ref={providedDrag.innerRef}
                                        {...providedDrag.draggableProps}
                                        {...providedDrag.dragHandleProps}
                                    >
                                        <div className="todo-item-contenido">
                                            <h2>{item.Author}</h2>
                                            <p>{item.TodoDescription}</p>
                                        </div>
                                        <div className="todo-item-actions">
                                            {item.TodoState !== 5 && (
                                                <button
                                                    className="btn"
                                                    onClick={() => onComplete(item.TodoID)}
                                                    disabled={completing}
                                                >
                                                    <img src={CompleteIcon} alt='Complete Icon' />
                                                </button>
                                            )}
                                            <button
                                                className="btn"
                                                onClick={() => onEdit(item)}
                                            >
                                                <img src={EditIcon} alt='Edit Icon' />
                                            </button>
                                        </div>
                                    </article>
                                )}
                            </Draggable>
                        );
                    })}
                    {provided.placeholder}
                </section>
            </div>
        </>
    );
};