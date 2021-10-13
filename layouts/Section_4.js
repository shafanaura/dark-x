import Button from '../components/Button';
import CardCategory from '../components/CardCategory';
import styles from '../styles/Section_4.module.scss';

export default function Section_4() {
  return (
    <div className={styles.container}>
      <div className={styles.left__content}>
        <h2>How to get started</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          risus urna at. Curabitur non lectus eget magna.
        </span>
        <Button size="large">Get Started</Button>
      </div>
      <div className={styles.right__content}>
        <CardCategory
          variant="bg"
          title="Create your account"
          description="Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. "
          text="1"
        />
      </div>
    </div>
  );
}
