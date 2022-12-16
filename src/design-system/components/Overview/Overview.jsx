import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Overview.module.css";

const Overview = ({ icon, title, description }) => {
  return (
    <div className={classes.container}>
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  );
};
export default Overview;
