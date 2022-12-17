import OurProgram from "../OurProgram";
import OurProgramData from "./OurProgramData";
import * as classes from "./OurProgramsList.module.css";
const OurProgramsList = () => {
  return (
    <div className={classes.container}>
      {OurProgramData.map((program) => (
        <OurProgram {...program} key={program.id} />
      ))}
    </div>
  );
};
export default OurProgramsList;
