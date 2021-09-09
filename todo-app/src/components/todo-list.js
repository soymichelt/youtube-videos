import React from 'react';
import LoadingImage from './../assets/loading.svg';
import CompleteIcon from './../assets/complete-icon-blue.svg';
import EditIcon from './../assets/edit-icon-blue.svg';

export const TodoList = ({
    items,
    loading,
    onComplete,
    onEdit,
}) => {
    return (
        <>
            <div className="todo-container">
                {loading && (
                    <div className="loader">
                        <img src={LoadingImage} />
                    </div>
                )}
                <section className={`todo ${loading ? 'todo-loading' : ''}`}>
                    {(items && items.length > 0) && items.map(item => {
                        return (
                            <article
                                key={item.TodoID}
                                className="todo-item"
                            >
                                <div className="todo-item-contenido">
                                    <h2>{item.Author}</h2>
                                    <p>{item.TodoDescription}</p>
                                </div>
                                <div className="todo-item-actions">
                                    <button
                                        className="btn"
                                        onClick={() => onComplete(item.TodoID)}
                                    >
                                        <img src={CompleteIcon} />
                                    </button>
                                    <button
                                        className="btn"
                                        onClick={() => onEdit(item)}
                                    >
                                        <img src={EditIcon} />
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </div>
        </>
    );
};