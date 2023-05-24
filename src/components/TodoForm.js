import React, { useContext, useState } from 'react';
import '../styles/TodoForm.css'
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
  const {
    setOpenModal,
    addTodo
  } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (e) => {
    const newText = e.target.value
    setNewTodoValue(newText)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder='Cocinar el almuerzo'
      />

      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >Cancelar </button>

        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >Añadir</button>
      </div>
    </form>
  );
};

export {TodoForm};