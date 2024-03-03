import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import exerciseAPI from "../components/exerciseapi";
import "./ExerciseDetail.css";
import { Link } from "react-router-dom";

const ExerciseDetail = () => {
  const [exercises, setExercises] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
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
        console.error("Error fetching Exercise API:", error);
      });
  }, [goal]);

  return (
    <div className="main-exercise-container">
      {exercises.map((exercise) => (
        <div className="exercise-container" key={exercise.id}>
          <img className="exercise-img" src={exercise.gifUrl} alt="Exercise" />
          <h4 className="exercise-name">{exercise.name}</h4>
          <div className="timer-button_container">
            <Link to="/timer-page" state={{ exercise: exercise }}>
              <button className="timer-page__button">GO</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetail;
