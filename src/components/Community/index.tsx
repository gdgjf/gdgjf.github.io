import Image from "next/image";
import styles from "./index.module.css";

const Community = ({
  logo,
  alt,
  description,
  href,
}: {
  logo: string;
  alt: string;
  description: string;
  href: string;
}) => {
  return (
    <div className={styles.container}>
      <a href={href}>
        <Image src={logo} width={320} height={100} alt={alt} />
      </a>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default Community;
