import CreativeSpeakersList from "./design-system/components/CreativeSpeakersList";
import OurProgramsList from "./design-system/components/OurProgramsList";
import OverviewList from "./design-system/components/OverviewList";
const App = () => {
  return (
    <div className="App">
      <CreativeSpeakersList />
      <OverviewList />
      <OurProgramsList />
    </div>
  );
};
export default App;
