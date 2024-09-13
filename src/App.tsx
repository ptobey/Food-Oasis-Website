import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaunchPage from './LaunchPage';
import MapPage from './MapPage';
import RecipePage from './RecipePage';

const App: React.FC = () => {
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<LaunchPage/>} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/recipes" element={<RecipePage />} />
    </Routes>
  </Router>

    
  );
};

export default App;