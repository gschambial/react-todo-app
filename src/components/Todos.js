import React from 'react';
import AddTodo from './AddTodo';

const Todos = ({ todos, deleteTodo, addTodo }) => {

    const todoList = todos.length ?
        (
            todos.map( todo => {
                return (
                    <div className="collection-item" key={todo.id}>
                        <span onClick = {() => deleteTodo(todo.id)}>
                            { todo.content }
                        </span>
                    </div>
                )
            })
        )
        :
        (
            <p className="center">You have no Todo's left</p>
        );

    return (
        <div>
            <div className="todos collection">
                { todoList }
            </div>
            <AddTodo addTodo = {addTodo}/>
        </div>
    );
}

export default Todos;