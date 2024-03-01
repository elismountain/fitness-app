import React, { useState, useEffect } from "react";
import ExerciseApi from "../components/exerciseapi";
import "./ExerciseDetail.css";

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
    <div className="main-exercise-container">
      <h1>Your workouts</h1>
      {exercises.map((exercise, index) => (
          <div className="exercise-container" key={index}>
            <h2 className="name">{exercise.name}</h2>
            <div className="info">
              <p className="instructions">
                Instructions: {exercise.instructions}
              </p>
              <img className="img" src={exercise.gifUrl} alt="Exercise" />
            </div>
          </div>
        
      ))}
    </div>
  );
};

export default ExerciseDetail;
