import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Component files
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputToDo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  // Handle change function to set the todo to complete
  const handleChange = (id) => {
    setTodos((prevState) => {
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    });
  };

  // Delete todo item
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  // Add a todo item
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Update item todo
  const setUpdate = (updatedId, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedId,
          };
        }
        return todo;
      }),
    );
  };

  // UseEffect hooks
  useEffect(() => {});

  // Return UI components
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
