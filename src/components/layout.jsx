import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '../context/themeContext';

export default function Layout() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}