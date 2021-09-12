import React from 'react';

export const TodoForm = ({
    selected,
    authorField,
    disabledForm,
    descriptionField,
    onSave,
    onDelete,
}) => {
    const today = new Date();
    const todayFormated = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
    return (
        <form className="formulario">
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
            </div>
        </form>
    );
};