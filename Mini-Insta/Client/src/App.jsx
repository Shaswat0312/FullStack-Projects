import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import FeedPage from "./Pages/FeedPage";

const App = () => {
  return (
    <Router>
      <h1 className="main-headline">MINI-INSTA</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post" element={<CreatePage />} />
      </Routes>
    </Router>
  );
};

export default App;