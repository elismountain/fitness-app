import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import WaterTracker from './components/watertracker'; // Import WaterTracker component
import Contact from './pages/contact';
import WorkoutPlan from './pages/WorkoutPlan';
import TimerPage from './pages/TimerPage';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <MyNavbar />
      <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
           <Route path="/workout-plan" element={<WorkoutPlan />} />
          <Route path="/timer-page" element={<TimerPage />} />
        <Route path="/contact" element={<Contact />} /> {/* This line adds the Contact route */}
        <Route path="/water-tracker" element={<WaterTracker />} /> {/* New route for WaterTracker */}
       <Route path="*" element={<Home />} />   
      </Routes>
      </Box>
      <Footer />
    </Box>
  );
};


export default App;
