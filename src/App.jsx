import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FollowersView from "./views/FollowersView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:username" element={<FollowersView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
