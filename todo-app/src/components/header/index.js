import React from 'react';
import './index.styles.css';

export const Header = ({
    onCreate,
}) => {
    return (
        <header className={'header'}>
            <h1>SoymichelDev <span>Board</span></h1>
            
            <div>
                <button className='btn-primary' onClick={onCreate}>
                    Añadir Tarea
                </button>
            </div>
        </header>
    );
};