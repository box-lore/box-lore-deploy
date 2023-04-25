import './App.css';
import React from 'react';

import AboutPage from './Pages/AboutPage.js';
import HomePage from './Pages/HomePage.js';
import TeamDashPage from './Pages/TeamDashPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import Layout from './Pages/Layout.js';
import Guide from './Components/Guide/Guide.js';

import {
  // Navigation
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="aboutpage" element={<AboutPage />} />
              <Route path="guide" element={<Guide />} />
              <Route path="homepage" element={<HomePage />} />
              <Route path="teamdashpage" element={<TeamDashPage />} />
              <Route path="signuppage" element={<SignupPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
