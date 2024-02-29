import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import calculateBMI from '../components/BMI';

const WorkoutPlan = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');
  
  // Directly parse to float here to avoid re-declaring inside useEffect
  const height = parseFloat(searchParams.get('height'));
  const weight = parseFloat(searchParams.get('weight'));

  const [bmi, setBmi] = useState('');

  useEffect(() => {
    // Check if height and weight are valid numbers before calling calculateBMI
    if (!isNaN(height) && !isNaN(weight)) {
      // Assuming calculateBMI expects two arguments: weight and height
      calculateBMI(weight, height)
        .then(data => {
          console.log(data);
          // Check if data and data.bmi exist before calling setBmi to avoid errors
          if (data && data.bmi) {
            setBmi(data.bmi);
          } else {
            console.error("BMI data is not available or in unexpected format.");
          }
        })
        .catch(error => {
          console.error('Error fetching BMI:', error);
        });
    }
  }, [weight, height]); 

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {username}</p>
      <div>
        <h1>BMI Calculator Result</h1>
        {bmi && <p>Your BMI is: {bmi.toFixed(2)}</p>}
      </div>
    </div>
  );
};

export default WorkoutPlan;

