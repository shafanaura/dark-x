import CardAbout from '../components/CardAbout';
import CardCategory from '../components/CardCategory';

const RightContent = (
  <>
    <p>dwawdwdwdwd</p>
    <p>dwawdwdwdwd</p>
  </>
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
