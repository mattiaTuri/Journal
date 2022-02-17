import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Section from "./Pages/Section";
import Main from "./Pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Section />} />
      </Route>
    </Routes>
  );
}

export default App;
