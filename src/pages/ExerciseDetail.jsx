import React, { useState, useEffect } from 'react';
import ExerciseApi from '../components/exerciseapi';

const ExerciseDetail = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const fetchedExercises = await ExerciseApi();
        setExercises(fetchedExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

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
