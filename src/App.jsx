import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkoutPlan from './pages/WorkoutPlan';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <Navbar />
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
