import classes from "./Accordion.module.css";
import CustomizedAccordions from "./MuiAccordion";

const Accordion = () => {
  return (
    <div className={classes.container}>
      <div className={classes["text-container"]}>
        <h2>
          Do You Have <span>Questions</span> ?
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={classes.accordion}>
        <CustomizedAccordions />
      </div>
    </div>
  );
};
export default Accordion;
