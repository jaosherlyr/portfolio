import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Outlet />
      </div>
    </>
  );
}