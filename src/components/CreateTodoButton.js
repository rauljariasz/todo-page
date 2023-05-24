import { useContext } from 'react';
import '../styles/CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal
  } = useContext(TodoContext)

  const handleClick = () => {
    setOpenModal(!openModal)
  }
  return (
    <button className="CreateTodoButton" onClick={handleClick} >
      +
    </button>
  )
}

export  { CreateTodoButton };