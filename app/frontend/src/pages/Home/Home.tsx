import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Quart Example App</h1>
      <p className={styles.subtitle}>
        This is the Home page served with Fluent UI and React Router.
      </p>
    </div>
  );
}

