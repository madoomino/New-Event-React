import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Overview from "./design-system/components/Overview";
const App = () => {
  return (
    <>
      <Overview icon={faUserGroup} title="Title">
        hello world
      </Overview>
    </>
  );
};
export default App;
