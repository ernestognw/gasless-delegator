import { useEffect, useState } from "react";
import { useTokenBalance, useWallet, NETWORKS } from "@web3-ui/core";
import { useWriteContract } from "@web3-ui/hooks";
import { GSLSToken } from "config/abis";
import { tokenAddress } from "config/environment";
import useTruncatedAddress from "hooks/useTruncatedAddress";
import styles from "styles/components/Delegator.module.css";
import { ethers } from "ethers";

const SEVEN_DAYS = 60 * 60 * 24 * 7;

const Delegator = () => {
  const [delegate, setDelegate] = useState<string>("");
  const [newDelegate, setNewDelegate] = useState<string>("");
  const { connection, correctNetwork, connected } = useWallet();
  const { formattedBalance } = useTokenBalance({
    tokenAddress: correctNetwork ? tokenAddress! : "",
    accountAddress: connection.userAddress!,
  });
  const truncatedAddress = useTruncatedAddress(connection.userAddress);
  const [GSLSTokenContract, isReady] = useWriteContract(
    tokenAddress!,
    GSLSToken
  );

  useEffect(() => {
    const getDelegate = async () => {
      if (GSLSTokenContract && connection.userAddress && correctNetwork) {
        try {
          const delegateFound = await GSLSTokenContract.delegates(
            connection.userAddress
          );
          setDelegate(delegateFound);
        } catch (err) {
          // Can't completely avoid this error as it is needed to access @web3-ui internals
          // to correctly handle network change
          console.log(err); // Logged so it doesn't throw
        }
      } else {
        setDelegate("{{delegate}}");
      }
    };
    getDelegate();
  }, [GSLSTokenContract, connection, correctNetwork, isReady]);

  const signDelegation = async () => {
    if (!connection.signer) {
      alert("Please connect your wallet first");
    } else if (!ethers.utils.isAddress(newDelegate)) {
      alert("Please specify a valid address");
    } else {
      const domain = {
        name: "Gasless Delegator",
        version: "1",
        chainId: (NETWORKS as { [key: string]: number })[connection.network],
        verifyingContract: tokenAddress,
      };

      const types = {
        Delegation: [
          { name: "delegatee", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "expiry", type: "uint256" },
        ],
      };

      const value = {
        delegatee: newDelegate,
        nonce: 0,
        expiry: Math.floor(Date.now() / 1000) + SEVEN_DAYS,
      };

      const signature = await connection.signer._signTypedData(
        domain,
        types,
        value
      );

      // TODO: Send to Autotask
      console.log(signature);
    }
  };

  return (
    <div className={styles.delegator}>
      <div className={styles.textContainer}>
        <p className={styles.balance}>
          Hello <b>{connection.ens || truncatedAddress || "{address}"}</b>,
          you&rsquo;re curently holding{" "}
          <b>{(connected && formattedBalance) || "{amount}"} $GSLS</b>
        </p>
        <p className={styles.currentDelegate}>
          Your current delegate is: {delegate}
        </p>
      </div>
      <div className={styles.inputContainer}>
        <input
          value={newDelegate}
          onChange={({ target: { value } }) => setNewDelegate(value)}
          className={styles.redelegateInput}
          type="text"
          placeholder="Input your new delegate (0x...)"
        />
        <button onClick={signDelegation} className={styles.redelegateButton}>
          Delegate
        </button>
      </div>
    </div>
  );
};

export default Delegator;
