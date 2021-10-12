import CardAbout from '../components/CardAbout';
import CardCategory from '../components/CardCategory';
import styles from '../styles/Section_3.module.scss';

const RightContent = (
  <div className={styles.container__img}>
    <img src="/assets/img/dashboard.svg" width="651" height="444" alt="img" />
  </div>
);

export default function Section_3() {
  return (
    <div>
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
    </div>
  );
}
