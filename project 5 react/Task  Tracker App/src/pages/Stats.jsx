import { useContext } from 'react';
import { TaskContext } from '../store/taskContext';

export default function Stats() {
  const { tasks } = useContext(TaskContext);
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="stats-page">
      <h2>Stats</h2>
      <p>Total: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {tasks.length - completed}</p>
    </div>
  );
}