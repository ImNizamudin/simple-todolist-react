import React from 'react';
import TodoItem from '../todo-item/TodoItem';
import './TodoList.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TodoList = ({ dataTodos, onDelete }) => {
    console.log(dataTodos);

    return (
        <TransitionGroup>
            {
                dataTodos.map(todo =>
                (
                    <CSSTransition key={todo.id} timeout={400} classNames='transition'>
                        <TodoItem key={todo.id} id={todo.id} onDelete={onDelete} {...todo} />
                    </CSSTransition>
                )
                )
            }
        </TransitionGroup>
    );
}

export default TodoList;