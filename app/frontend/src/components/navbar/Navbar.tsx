import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Quart Example</span>
      <div className={styles.navLinks}>
        <Link className={styles.link} to="/home">Home</Link>
        <Link className={styles.link} to="/react">React Challenge</Link>
        <Link className={styles.link} to="/login">Logout</Link>
      </div>
    </nav>
  );
}
