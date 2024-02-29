import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { exerciseAPI } from '../components/exerciseapi';
import SignIn from '../components/SignIn';
import { exercisesArray } from `../components/exerciseapi`;


const ExerciseDetail = () => {
  const [exercises, setExercises] = useState([]);
  setExercises(exerciseApi);
  
  return (
    <div>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <h2>{exercise.name}</h2>
          <p>Instructions: {exercise.instructions}</p>
          <img src={exercise.gifUrl} alt="Exercise" />
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetail;