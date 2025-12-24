import { useContext } from 'react';
import { TaskContext } from '../store/taskContext';

export default function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}