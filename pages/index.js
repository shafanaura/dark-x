import styles from '../styles/Home.module.scss';
import Head from 'next/Head';
import Navbar from '../components/Navbar';
import Section_1 from '../layouts/Section_1';
import Section_2 from '../layouts/Section_2';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dark X</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Section_1 />
      <Section_2 />
      <div style={{ marginTop: 100 }} />
    </div>
  );
}
