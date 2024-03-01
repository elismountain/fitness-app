import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import calculateBMI from '../components/BMI';
import EmojiTracker from '../components/emoji';
import ExerciseApi from '../components/exerciseapi';
import ExerciseDetail from './ExerciseDetail';

const WorkoutPlan = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');
  const goal = searchParams.get('goal')
  
  // Directly parse to float here to avoid re-declaring inside useEffect
  const height = parseFloat(searchParams.get('height'));
  const weight = parseFloat(searchParams.get('weight'));

  const [bmi, setBmi] = useState('');

  // useeffect hook to calculate bmi
  useEffect(async () => {
    // Check if height and weight are valid numbers before calling calculateBMI
    if (!isNaN(height) && !isNaN(weight)) {
      var data = await calculateBMI(weight, height);

      if(!data) {
        return;
      }

      onsole.log(`Data received from BMI call: ${data}`);

      // Check if data and data.bmi exist before calling setBmi to avoid errors
      if (data && data.bmi) {
        setBmi(data.bmi);
      } else {
        console.error("BMI data is not available or in unexpected format.");
      }
    }
  }, [weight, height]); 

 // get the goal data from the signin form
 useEffect(async () => {
  const fetchedExercises = await ExerciseApi();

  if (!fetchedExercises) {
    console.error("Error getting exercise data");
    return;
  }

  if (fetchedExercises.length == 0) {
    console.log("Exercise data not available");
  }

  // TODO: setExcercises not defined
  // setExercises(fetchedExercises);
}, [goal]);



  return (
    <div>
      <h2>Welcome , {username}</h2>
    
      <div>
        {bmi && <p>Your BMI is: {bmi.toFixed(2)}</p>}
        {goal && <p>Goal for today : {goal}</p>}
        <p>How are you feeling today?</p>
        <div>{EmojiTracker()}</div>
      </div>
      <ExerciseDetail />
    </div>
  );
};

export default WorkoutPlan;

