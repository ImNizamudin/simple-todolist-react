import React, { useState } from 'react';
import './TodoCreate.css';

const TodoCreate = ({ onCreateTodo }) => {
    const [getInputTodo, setInputTodo] = useState(''); // jd useState itu menampung data / tempat penampungan data, dan sekarang data nya kosong

    const onInputChangeEventHandler = (event) => {
        setInputTodo(event.target.value)
    }

    const onSubmitEventHandler = (event) => {
        event.preventDefault(); // mematikan fungsi defultnya yaitu mensubmit kemudian merefresh page

        console.log(typeof getInputTodo);

        if (getInputTodo !== '') {
            const newTodo = {
                id: Math.floor(Math.random() * 100 + 1), // angka random yang angkanya dari 1 sampai 100. Ditambah 1 agar id tidak bernilai 0, karena id tidak boleh 0
                title: getInputTodo
            };

            onCreateTodo(newTodo);
            setInputTodo('');
        }

        // console.log(newTodo);

    }

    return (
        <form className='todo-form enter-form' onSubmit={onSubmitEventHandler}>
            <input type='text' className='todo-input' onChange={onInputChangeEventHandler} value={getInputTodo} />
            <button type='submit' className='btn-submit'>Add</button>
        </form>
    );
}

export default TodoCreate;