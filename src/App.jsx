import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SectionFollowers from "./components/SectionFollowers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/followers" element={<SectionFollowers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
