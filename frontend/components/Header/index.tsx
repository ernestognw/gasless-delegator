import Link from "next/link";
import Image from "next/image";
import styles from "styles/components/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            alt="Gasless Delegator"
            width={200}
            height={58}
            priority
          />
        </a>
      </Link>
      <div>
        <button onClick={() => {}}>Connect wallet</button>
      </div>
    </div>
  );
};

export default Header;
