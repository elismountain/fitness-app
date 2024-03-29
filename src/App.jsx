import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import ProgressTracker from './pages/progresstracker';
import WaterTracker from './components/watertracker'; // Import WaterTracker component
import Contact from './pages/contact';
import WorkoutPlan from './pages/WorkoutPlan';
import TimerPage from './pages/TimerPage';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  const NavbarHandler = () => {
    const location = useLocation();
    const pathsToShowNavbar = ['/exercise/', '/timer-page', '/contact', '/ProgressTracker', '/workout-plan', '/ExerciseDetail', '/TimerPage'];
    const showNavbar = pathsToShowNavbar.some(path => location.pathname.startsWith(path));
    
    return showNavbar ? <MyNavbar /> : null;
  };

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
       <NavbarHandler />
      <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
           <Route path="/ExerciseDetail" element={<ExerciseDetail />} />
           <Route path="/workout-plan" element={<WorkoutPlan />} />
           <Route path="/TimerPage" element={<TimerPage />} />
          <Route path="/timer-page" element={<TimerPage />} />
          <Route path="/WorkoutPlan" element={<ExerciseDetail />} />
          
          <Route path="/ProgressTracker" element={<ProgressTracker />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/watertracker" element={<WaterTracker />} /> 
       <Route path="*" element={<Home />} />   
      </Routes>
      </Box>
      <Footer />
    </Box>
  );
};


export default App;
