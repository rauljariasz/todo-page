import { useContext } from 'react';
import '../styles/TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total
  } = useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  )
}

export  { TodoCounter };