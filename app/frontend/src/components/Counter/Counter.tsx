import { Button, Text, tokens, makeStyles, shorthands } from "@fluentui/react-components";
import React, { useState, useEffect } from "react";

// Custom styles for more dynamic interaction
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...shorthands.gap('10px'),
    ...shorthands.padding('20px'),
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  },
  counterDisplay: {
    fontSize: '2rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  buttonContainer: {
    display: 'flex',
    ...shorthands.gap('10px'),
  },
  milestone: {
    marginTop: '10px',
    fontStyle: 'italic',
    color: '#666',
  }
});

// Example Counter Component with Enhanced Interactivity
const ExampleCounter: React.FC = () => {
  const styles = useStyles();
  const [count, setCount] = useState<number>(0);
  const [milestone, setMilestone] = useState<string>("");
  const [min, max] = [0, 20]; // Expanded range

  // Dynamic milestone tracking
  useEffect(() => {
    if (count === 10) setMilestone("Halfway there!");
    else if (count === 20) setMilestone("Maximum reached!");
    else if (count === 0) setMilestone("Back to zero!");
    else setMilestone("");
  }, [count]);

  const increment = () => {
    if (count < max) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  // Color changes based on count
  const getCountColor = () => {
    if (count < 5) return 'green';
    if (count < 15) return 'orange';
    return 'red';
  };

  return (
    <div className={styles.container}>
      <Text 
        size={500} 
        className={styles.counterDisplay}
        style={{ color: getCountColor() }}
      >
        Count: {count}
      </Text>
      <div className={styles.buttonContainer}>
        <Button 
          appearance="primary" 
          onClick={decrement} 
          disabled={count <= min}
        >
          Decrease
        </Button>
        <Button 
          appearance="primary" 
          onClick={increment} 
          disabled={count >= max}
        >
          Increase
        </Button>
        <Button 
          appearance="secondary" 
          onClick={reset} 
          disabled={count === 0}
        >
          Reset
        </Button>
      </div>
      {milestone && <div className={styles.milestone}>{milestone}</div>}
    </div>
  );
};

// Challenge Counter Component (for intern)
const ChallengeCounter: React.FC = () => {
  // Challenge Counter Component (for José)
  // CHALLENGE 1: State Management
  // TODO: Uncomment the following line to enable state tracking
  // const [count, setCount] = useState<number>(0);

  // Optional: Add min and max limits for the counter
  const [min, max] = [0, 10];

  // CHALLENGE 2: Event Handlers
  // TODO: Implement the increment function
  // Hint: Use setCount to update the state
  // const increment = () => {
  //   // Your code here
  //   // Check if count is less than max before incrementing
  // };

  // TODO: Implement the decrement function
  // Hint: Use setCount to update the state
  // const decrement = () => {
  //   // Your code here
  //   // Check if count is greater than min before decrementing
  // };

  // TODO: Implement the reset function
  // Hint: Use setCount to reset to initial value
  // const reset = () => {
  //   // Your code here
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: tokens.spacingHorizontalM,
        padding: tokens.spacingHorizontalM,
      }}
    >
      <Button
      // TODO: Add onClick and disabled props
      // Hint: Use the decrement function from above and check count against min
      >
        -
      </Button>
      <Text size={400}>
        {/* TODO: Display the current count */}
        Count: {/* Uncomment and add count variable */}
      </Text>
      <Button
      // TODO: Add onClick and disabled props
      // Hint: Use the increment function from above and check count against max
      >
        +
      </Button>
      <Button
      // TODO: Add onClick and disabled props
      // Hint: Use the reset function from above and check if count is 0
      >
        Reset
      </Button>
    </div>
  );
};

// Export both components for flexibility
export { ChallengeCounter, ExampleCounter };
