import React from 'react';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import calculateBMI from '../components/BMI';

const WorkoutPlan = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');

  const [bmi, setBmi] = useState('');

  useEffect(() => {
    // Example: Calculate BMI for a person with 70kg weight and 1.75m height
    calculateBMI(70, 1.75)
      .then(data => {
        console.log(data)
        setBmi(data.bmi); // Assuming the API returns an object with a bmi property
      })
      .catch(error => {
        console.log('Error fetching BMI:', error);
      });
  }, []);


  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {username}</p>
      {/* Add your workout plan content here */}
      <div>
      <h1>BMI Calculator Result</h1>
      {bmi && <p>Your BMI is: {bmi.toFixed(2)}</p>}
    </div>
    </div>
  );
};

export default WorkoutPlan;
