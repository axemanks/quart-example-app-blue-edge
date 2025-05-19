import React, { useState } from "react";
import styles from "./Counter.module.css";

export const ExampleCounter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const min = 0;
  const max = 10;

  const increment = () => {
    if (value < max) {
      setValue((prevValue) => prevValue + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <div className={styles.counter}>
      <div className={styles.display}>{value}</div>
      <div className={styles.buttons}>
        <button onClick={decrement} disabled={value === min}>
          -
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment} disabled={value === max}>
          +
        </button>
      </div>
    </div>
  );
};

export const ChallengeCounter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const min = 0;
  const max = 10;

  const increment = () => {
    if (value < max) {
      setValue((prevValue) => prevValue + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <div className={styles.counter}>
      <div className={styles.display}>{value}</div>
      <div className={styles.buttons}>
        <button onClick={decrement} disabled={value === min}>
          -
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment} disabled={value === max}>
          +
        </button>
      </div>
    </div>
  );
};
