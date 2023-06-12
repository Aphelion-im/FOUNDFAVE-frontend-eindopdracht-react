import { ReactComponent as Sun } from './icons/sun.svg';
import { ReactComponent as Moon } from './icons/moon.svg';
import './DarkLightMode.css';

export default function DarkLightMode() {
  const toggleTheme = (isDark) => {
    isDark
      ? document.querySelector('body').setAttribute('data-theme', 'dark')
      : document.querySelector('body').setAttribute('data-theme', 'light');
    isDark
      ? localStorage.setItem('selectedTheme', 'dark')
      : localStorage.setItem('selectedTheme', 'light');
  };

  const themeController = (e) => {
    e.target.checked ? toggleTheme(true) : toggleTheme(false);
  };

  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    toggleTheme(true);
  }

  return (
    <>
      <div className="dark-mode">
        <input
          className="dark-mode-input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={themeController}
          defaultChecked={selectedTheme === 'dark'}
          title="Click the toggle to switch theme"
        />
        <label
          className="dark-mode-label"
          htmlFor="darkmode-toggle"
          title="Toggle to switch theme"
        >
          <Sun />
          <Moon />
        </label>
      </div>
    </>
  );
}
