import type { ButtonProps } from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

export default function LoginPage(props: ButtonProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Quart Example App</h1>
      <Button
        {...props}
        appearance="primary"
        size="large"
        shape="circular"
        className={styles.loginButton}
        onClick={() => navigate("/home")}
      >
        Login
      </Button>
    </div>
  );
}
