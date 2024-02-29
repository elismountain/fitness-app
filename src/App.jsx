import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import WorkoutPlan from './pages/WorkoutPlan';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
