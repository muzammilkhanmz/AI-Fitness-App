import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { LayoutDashboard, Utensils, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/dashboard" className="text-xl font-bold text-blue-600">FitAI</Link>
      <div className="flex items-center gap-6">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-600 transition text-slate-600 dark:text-slate-300">
          <LayoutDashboard size={20} /> <span className="hidden md:inline">Dashboard</span>
        </Link>
        <Link to="/food-log" className="flex items-center gap-2 hover:text-blue-600 transition text-slate-600 dark:text-slate-300">
          <Utensils size={20} /> <span className="hidden md:inline">Food Log</span>
        </Link>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}