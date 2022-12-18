import OverviewData from "../../../../design-system/components/OverviewList/overview-data";
import OverviewComponent from "../../../../design-system/components/Overview";
import classes from "./Overview.module.css";
const Overview = () => {
  return (
    <section className={classes.container}>
      {OverviewData.map((item) => (
        <OverviewComponent {...item} key={item.id} />
      ))}
    </section>
  );
};
export default Overview;
