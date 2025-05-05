import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = { onClick?: () => void };

const Button = ({ children, onClick }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
