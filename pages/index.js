import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Head from 'next/Head';
import Navbar from '../components/Navbar';
import Section_1 from '../layouts/Section_1';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dark X</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section>
        <Section_1 />
      </section>
    </div>
  );
}
