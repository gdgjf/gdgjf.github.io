import { HTMLProps, ReactNode } from "react";
import styles from "./index.module.css";

type SectionVariants = "default" | "gray";

const Section = ({
  children,
  variant = "default",
  ...props
}: {
  children: ReactNode;
  variant?: SectionVariants;
} & HTMLProps<HTMLDivElement>) => {
  return (
    <section
      {...props}
      className={`${styles.section} ${props.className} ${variant === "gray" && styles.gray}`}
    >
      <div className={styles.sectionInner}>{children}</div>
    </section>
  );
};

export default Section;
