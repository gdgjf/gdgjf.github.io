import { HTMLProps } from "react";
import styles from "./index.module.css";

const Button = ({
  children,
  ...props
}: { children: string } & HTMLProps<HTMLAnchorElement>) => {
  return (
    <a {...props} className={styles.button}>
      {children}
    </a>
  );
};

export default Button;
