import { CompletedIcon } from './CompletedIcon'
import { DeleteIcon } from './DeleteIcon'
import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompletedIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };