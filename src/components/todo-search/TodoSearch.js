import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchTodo }) => {
    const onSearchClickEventHandler = () => {
        document.querySelector('.search-box').classList.toggle('search-box-active');
        document.querySelector('.search-btn').classList.toggle('search-btn-active');
        document.querySelector('.search-txt').classList.toggle('search-txt-active');
        document.querySelector('.todo-form').classList.toggle('exit-form');
        document.querySelector('.todo-form').classList.toggle('enter-form');
        document.querySelector('.todo-form').classList.toggle('small-form');

        document.querySelector('.search-txt').value = '';
    }

    const onSearchChangeEventHandler = (event) => {
        searchTodo(event.target.value);
    }

    return (
        <div className="search-box">
            <input className="search-txt" onChange={onSearchChangeEventHandler} type="text" placeholder="Type to search" />
            <div className="search-btn" onClick={onSearchClickEventHandler}>
                <i className="bi bi-search"></i>
            </div>
        </div>
    );
}

export default TodoSearch;