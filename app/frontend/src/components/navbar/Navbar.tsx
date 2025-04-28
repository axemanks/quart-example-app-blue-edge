import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Quart Example</span>
      <Link className={styles.link} to="/">Home</Link>
      {/* Add more navigation links here as needed */}
    </nav>
  );
}
