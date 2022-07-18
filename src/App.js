import React, {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';
import BottomNavigation from './layouts/BottomNavigation';
import HeaderNavigation from './layouts/HeaderNavigation';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const App = () => (
  <Router>
    <div id="wrapper">
      <div id="content">
        <HeaderNavigation />
        <BottomNavigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </Router>
)

export default App;
