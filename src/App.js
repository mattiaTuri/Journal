import React from "react";
import Home from "./Home";
import Articles from "./Articles";
import { Routes, Route } from "react-router-dom";
import Pages from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Articles />} />
        <Route path="/pages" element={<Pages />} />
      </Route>
    </Routes>
  );
}

export default App;
