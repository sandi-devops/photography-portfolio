import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-yellow-400"
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
