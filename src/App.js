import React, {Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BottomNavigation from './layouts/BottomNavigation';
import HeaderNavigation from './layouts/HeaderNavigation';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Login = lazy(() => import('./Auth/Login'));

const App = () => {
  const [user, setUser] = useState({});

  console.log(user);
  return (
    <Router>
      <div id="wrapper">
        <div>
          <HeaderNavigation />
          <div className="space-sticky"></div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
          <BottomNavigation />
        </div>
      </div>
    </Router>
  );
}

export default App;
