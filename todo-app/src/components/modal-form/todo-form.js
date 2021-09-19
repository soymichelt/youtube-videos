import React from 'react';
import './todo-form.styles.css';

export const TodoForm = ({
    selected,
    authorField,
    disabledForm,
    descriptionField,
    onSave,
    onDelete,
    onClose,
    isActive,
}) => {
    const today = new Date();
    const todayFormated = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
    return (
        <div
            className={`modal ${isActive ? 'is-active' : ''}`}
        >
            <form className="formulario modal-form">
                <input
                    {...authorField}
                    className="control-texto"
                    placeholder="Encargado"
                    disabled={disabledForm}
                />
                <textarea
                    {...descriptionField}
                    className="control-texto"
                    placeholder="Descripción de la tarea"
                    disabled={disabledForm}
                    cols={3}
                />
                <div className="btn-actions">
                    <button
                        type="button"
                        className="control-btn"
                        disabled={disabledForm}
                        onClick={() => {
                            onSave({
                                todoID: selected?.TodoID,
                                author: authorField.value,
                                todoDate: selected ? selected.TodoDate : todayFormated,
                                description: descriptionField.value,
                                state: 1,
                            }, !!selected);
                        }}
                    >
                        Guardar
                    </button>
                    {selected && (
                        <button
                            type="button"
                            className="control-btn"
                            disabled={disabledForm}
                            onClick={() => onDelete(selected.TodoID)}
                        >
                            Eliminar
                        </button>
                    )}
                    <button
                        type="button"
                        className="control-btn"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};