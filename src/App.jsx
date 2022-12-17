import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
