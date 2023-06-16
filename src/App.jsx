import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/articles/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Articles />} />
        <Route path="/:id" element={<Articles />} />
      </Route>
    </Routes>
  );
}

export default App;
