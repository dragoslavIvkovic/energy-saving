import Head from "next/head";
import styles from "../styles/Elements.module.css";
import GDPRConsent from "../components/GDPRConsent/GDPRConsent.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Energy consumption calculation</title>
        <meta name="description" content="Energy consumption calculation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Calculation/> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a className={styles.link} href="https://nextjs.org">
            Energy consumption calculation
          </a>
        </h1>

        <p className={styles.description}>
          Are you tired of worrying about the high cost of your monthly
          electrical bills? Our energy calculator app is here to help! Our app
          allows you to easily track and compare the energy consumption of your
          household devices. With our app, you can find out which devices are
          using the most energy and how much they are costing you. By using our
          app, you can make informed decisions about which devices to use more
          often and which ones to limit or even replace. Plus, with our app's
          easy-to-use interface and accurate calculations, you can trust that
          you are getting the most accurate information possible. Don't let high
          energy costs stress you out any longer. Try our energy calculator app
          today and start saving money on your monthly bills!
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <GDPRConsent />
        </div>
      </main>
    </div>
  );
};

export default Home;
