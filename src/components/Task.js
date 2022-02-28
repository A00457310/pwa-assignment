import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.name} <FaTimes style={{color: 'red', cursor: 'pointer'}}
            onClick = {() => {onDelete(task.id)}}/></h3>
            <p>Due Date: {task.dueDate.toDateString()}</p>
            <p>Assigned: {task.assignedTo}</p>
        </div>
    )
}

export default Task
