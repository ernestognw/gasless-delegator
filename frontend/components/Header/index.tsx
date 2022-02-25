import Link from "next/link";
import { useWallet } from "@web3-ui/core";
import Image from "next/image";
import styles from "styles/components/Header.module.css";

const Header = () => {
  const {
    connected,
    connectWallet,
    correctNetwork,
    disconnectWallet,
    switchToCorrectNetwork,
  } = useWallet();

  let buttonProps: ButtonProps = {
    onClick: connectWallet,
    children: "Connect wallet",
  };

  if (connected) {
    if (!correctNetwork) {
      buttonProps.onClick = switchToCorrectNetwork;
      buttonProps.children = "Switch to correct network";
    } else {
      buttonProps.onClick = disconnectWallet;
      buttonProps.children = "Disconnect";
    }
  }

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
        <button {...buttonProps} />
      </div>
    </div>
  );
};

export default Header;
