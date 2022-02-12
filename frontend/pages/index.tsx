import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/Header";
import styles from "styles/Home.module.css";
import Delegator from "components/Delegator";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ERC20 Vote Gasless Delegator</title>
        <meta name="description" content="Subsidized ERC20 vote delegation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Delegator />
      </main>
    </>
  );
};

export default Home;
