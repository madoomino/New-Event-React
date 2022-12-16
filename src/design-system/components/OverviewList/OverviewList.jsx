import classes from "./OverviewList.module.css";
import { data } from "./overview-data";
import Overview from "../Overview/Overview";
const OverviewList = () => {
  return (
    <div className={classes.container}>
      {data.map((item) => (
        <Overview {...item} key={item.id} />
      ))}
    </div>
  );
};
export default OverviewList;
