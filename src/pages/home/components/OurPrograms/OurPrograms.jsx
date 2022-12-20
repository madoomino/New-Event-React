import classes from "./OurPrograms.module.css";
import OurProgramsList from "../../../../design-system/components/OurProgramsList";
import Tabs from "./Tabs";
const OurPrograms = () => {
  return (
    <section className={classes.container}>
      <h3>
        Our <span className={classes.speakers}>Programs</span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        cupiditate exercitationem! Voluptate adipisci unde
      </p>
      <Tabs />
    </section>
  );
};
export default OurPrograms;
