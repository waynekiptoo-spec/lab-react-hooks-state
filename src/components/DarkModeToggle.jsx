export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} data-testid="dark-mode-toggle">
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}