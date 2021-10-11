import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Image
        src="/assets/img/line-chart.svg"
        width="422"
        height="378"
        alt="dawd"
      />
      <Image
        src="/assets/img/hero-chart.svg"
        width="728"
        height="444"
        alt="dawd"
      />
      <Image
        src="/assets/img/bar-chart.svg"
        width="422"
        height="378"
        alt="dawd"
      />
    </div>
  );
}
