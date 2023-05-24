import React, { useContext } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodoContext } from './TodoContext';


const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch  />
      
        <TodoList>
          {loading && 
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
          }
          {error && <TodosError />}
          {(!loading && searchedTodos.length < 1) && <EmptyTodos />}
          
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)} 
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>
    
      <CreateTodoButton />
      
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};

export {AppUI};