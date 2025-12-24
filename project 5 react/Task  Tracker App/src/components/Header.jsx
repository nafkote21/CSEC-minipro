import { useContext } from 'react';
import { TaskContext } from '../store/taskContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isDark, setIsDark } = useContext(TaskContext);
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}