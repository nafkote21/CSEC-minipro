import { useState, useContext } from 'react';
import { TaskContext } from '../store/taskContext';

export default function TaskInput() {
  const [text, setText] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a task..." />
      <button type="submit">Add Task</button>
    </form>
  );
}