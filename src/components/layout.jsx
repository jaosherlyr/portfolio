import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

import styles from './layout.module.css';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}