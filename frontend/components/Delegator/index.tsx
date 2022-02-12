import styles from "styles/components/Delegator.module.css";

const Delegator = () => {
  return (
    <div className={styles.delegator}>
      <div className={styles.textContainer}>
        <p className={styles.balance}>
          Hello <b>address</b>, you&rsquo;re curently holding <b>150 $GSLS</b>
        </p>
        <p className={styles.currentDelegate}>
          Your current delegate is: 0x0000000000
        </p>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.redelegateInput}
          type="text"
          placeholder="Input your new delegate (0x...)"
        />
        <button className={styles.redelegateButton}>
          Delegate
        </button>
      </div>
    </div>
  );
};

export default Delegator;
