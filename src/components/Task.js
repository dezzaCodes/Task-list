import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // template literal, toggle classes for css
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
            onDoubleClick={() => onToggle(task.id)}>
            <h3> 
                {task.text} <FaTimes 
                                style={{ color: 'red', 
                                        cursor: 'pointer'}} 
                                // this is how you pass something up
                                onClick={() => onDelete(task.id)} 
                            />
            </h3>
            <p> {task.day} </p>
        </div>
    )
}

export default Task
