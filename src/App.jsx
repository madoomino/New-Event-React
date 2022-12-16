import CreativeSpeakersList from "./design-system/components/CreativeSpeakersList/CreativeSpeakersList";
import OverviewList from "./design-system/components/OverviewList";
import classes from "./App.module.css";
const App = () => {
  return (
    <div className={classes.App}>
      <CreativeSpeakersList />
      <OverviewList />
    </div>
  );
};
export default App;
