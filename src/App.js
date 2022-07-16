import React, {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import BottomBar from './layouts/BottomBar';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const App = () => (
  <Router>
      <BottomBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
  </Router>
)

export default App;
