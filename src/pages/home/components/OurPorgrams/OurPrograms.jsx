import classes from "./OurPrograms.module.css";
import OurProgramsList from "../../../../design-system/components/OurProgramsList";
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
      <div className={classes["btns-container"]}>
        <button>First Day</button>
        <button>Second Day</button>
        <button>Third Day</button>
      </div>
      <hr />
      <OurProgramsList />
    </section>
  );
};
export default OurPrograms;
