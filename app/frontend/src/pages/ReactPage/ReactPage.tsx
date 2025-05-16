// ReactPage.tsx

import React from "react";
import { ChallengeCounter, ExampleCounter } from "../../components/Counter";
import styles from "./ReactPage.module.css";

const ReactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React Learning Challenge</h1>
      <div className={styles.description}>
        <p>Welcome to the React Learning Challenge!</p>
        <p>Study the reference implementation, then build your own counter.</p>
      </div>
      <div className={styles.counterSection}>
        <div className={`${styles.counterCard} ${styles.exampleCounter}`}>
          <div className={styles.counterLabel}>Reference Implementation</div>
          <ExampleCounter />
        </div>
        <div className={`${styles.counterCard} ${styles.challengeCounter}`}>
          <div className={styles.counterLabel}>Challenge Counter</div>
          <ChallengeCounter />
        </div>
      </div>
    </div>
  );
};

export default ReactPage;
