import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import exerciseAPI from "../components/exerciseapi";
import "./ExerciseDetail.css";

const ExerciseDetail = () => {
  const [exercises, setExercises] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const goal = searchParams.get("goal");


  useEffect(() => {
    // Check if height and weight are valid numbers before calling calculateBMI

    // Assuming calculateBMI expects two arguments: weight and height
    exerciseAPI(goal)
      .then((data) => {
        console.log(data);
        // Check if data and data.bmi exist before calling setBmi to avoid errors
        setExercises(data);
      })
      .catch((error) => {
        console.error("Error fetching BMI:", error);
      });
  }, [goal]);

  // useEffect(() => {
  //   const fetchExercises = async () => {
  //     try {
  //       const fetchedExercises = await exerciseAPI();
  //       setExercises(fetchedExercises);
  //     } catch (error) {
  //       console.error("Error fetching exercises:", error);
  //     }
  //   };

  //   fetchExercises();
  // }, []);

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
