import React from 'react';

export const Form = () => {

    return (
        <form className="formulario">
            <input id="nombre" className="control-texto" placeholder="Encargado" />
            <input id="tarea" className="control-texto" placeholder="Descripción de la tarea" />
            <button id="btnAgregar" type="button" className="control-btn">Añadir</button>
        </form>
    );
};