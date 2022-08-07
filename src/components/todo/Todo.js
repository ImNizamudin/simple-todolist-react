import React, { useState } from 'react';
import './Todo.css';
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import TodoSearch from '../todo-search/TodoSearch';

const Todo = () => {
    const [getTodos, setTodos] = useState(
        [
            { id: 1, title: 'Learn React' },
            { id: 2, title: 'Learn NodeJS' },
            { id: 3, title: 'Learn Laravel' }
        ]
    );
    // getTodos : fungsi / trigger untuk mendapatkan data todos secara realtime
    // setState : fungsi / trigger untuk menambah / memberikan data baru secara realtime
    // seperti setter dan getter OOP

    const eventCreateTodo = (todo) => {
        setTodos((getTodos.concat(todo))); // menggabungkan data todo sebelumnya dengan todo baru dengan method concat
        // console.log(getTodos);
    }

    const onDeleteEventHandler = (id) => {
        const todos = getTodos.filter(todo => todo.id !== id);
        setTodos(todos);
    }

    const [getFilteredTodos, setFilteredTodos] = useState({
        filteredTodos: [],
        isSearching: false
    })

    const searchEventHandler = (keyword) => {
        const isSearching = keyword.length > 0;
        if (!keyword) {
            setFilteredTodos(
                {
                    filteredNotes: [],
                    isSearching
                }
            );
        } else {
            const filteredTodos = getTodos.filter((todo) => {
                return todo.title.toUpperCase().indexOf(keyword.toUpperCase()) !== -1
            });
            setFilteredTodos({ filteredTodos, isSearching });
        }
    }

    return (
        <div>
            <h3>Todo List</h3>
            <div className='input'>
                <TodoSearch searchTodo={searchEventHandler} />
                <TodoCreate onCreateTodo={eventCreateTodo} />
            </div>
            {/* <TodoList dataTodos={getTodos} onDelete={onDeleteEventHandler} /> */}
            <TodoList dataTodos={getFilteredTodos.isSearching ? getFilteredTodos.filteredTodos : getTodos} onDelete={onDeleteEventHandler} />
        </div>
    );
}

export default Todo;