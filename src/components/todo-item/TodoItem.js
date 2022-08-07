import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, title, onDelete }) => {
    return (
        <div className='todo-item'>
            <h6>{title}</h6>
            <button className='delete' onClick={() => onDelete(id)}>
                <i className="bi bi-check-circle"></i>
            </button>
        </div>
    );
}

export default TodoItem;