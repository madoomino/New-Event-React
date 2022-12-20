import { useState } from "react";
import classes from "./OurPrograms.module.css";
import OurProgramData from "../../../../design-system/components/OurProgramsList/OurProgramData";
import OurProgramsList from "../../../../design-system/components/OurProgramsList";
const Tabs = () => {
  const [tab, setTab] = useState("tab1");
  const clickHandler = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <div className={classes["btns-container"]}>
        <button
          onClick={() => clickHandler("tab1")}
          className={tab === "tab1" ? classes["active-tab"] : ""}
        >
          First Day
        </button>
        <button
          onClick={() => clickHandler("tab2")}
          className={tab === "tab2" ? classes["active-tab"] : ""}
        >
          Second Day
        </button>
        <button
          onClick={() => clickHandler("tab3")}
          className={tab === "tab3" ? classes["active-tab"] : ""}
        >
          Third Day
        </button>
      </div>
      <hr />
      <div className={classes["imgs-container"]}>
        {tab === "tab2" ? (
          <OurProgramsList items={OurProgramData.tab2} />
        ) : tab === "tab3" ? (
          <OurProgramsList items={OurProgramData.tab3} />
        ) : (
          <OurProgramsList items={OurProgramData.tab1} />
        )}
      </div>
    </>
  );
};
export default Tabs;
