import Button from '../components/Button';
import CardAbout from '../components/CardAbout';
import CardCategory from '../components/CardCategory';
import styles from '../styles/Section_3.module.scss';

const RightContent = (
  <div className={styles.container__img_right}>
    <img src="/assets/img/dashboard.svg" alt="img" />
  </div>
);

const LeftContent = (
  <div className={styles.container__img_left}>
    <img src="/assets/img/encrypt.svg" alt="img" />
  </div>
);

export default function Section_3() {
  return (
    <div className={styles.container__content}>
      <CardAbout
        title="Real-Time Trading Like Never Before"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        col_content={RightContent}
      >
        <CardCategory
          direction="row"
          icon="clock"
          title="<1 Sec Operations"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
        <CardCategory
          direction="row"
          icon="no"
          title="No Commissions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
      </CardAbout>
      <CardAbout
        align="left"
        title="Built-in Enterprise Encryption and Security"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        col_content={LeftContent}
      >
        <CardCategory
          direction="row"
          icon="clock"
          title="256-Bit AES Encryption"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
        <CardCategory
          direction="row"
          icon="no"
          title="Advanced Security Standards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
      </CardAbout>
      <div className={styles.subscribe__container}>
        <p>Create your account and start trading today</p>
        <div>
          <Button variant="white" size="large">
            Get Started
          </Button>
          <Button variant="white-outlined" size="large">
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}
