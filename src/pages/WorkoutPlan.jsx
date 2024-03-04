import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmojiTracker from "../components/emoji";
import exerciseAPI from "../components/exerciseapi";
import ExerciseDetail from "./ExerciseDetail";
import "./WorkoutPlan.css";
import WaterTracker from "../components/watertracker";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const WorkoutPlan = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const goal = searchParams.get("goal");

  // parse float the user input
  const height = parseFloat(searchParams.get("height"));
  const weight = parseFloat(searchParams.get("weight"));
  

  const [bmi, setBmi] = useState("");
  const [exercise, setExercise] = useState([]);
  const [weightCategory, setWeightCategory] = useState("");

  useEffect(() => {
    const userBMI = weight / (height * height);
    setBmi(userBMI);

    if (userBMI <= 18.5) {
      setWeightCategory("Under Weight");
    } else if (userBMI >= 18.5 && userBMI <= 24.9) {
      setWeightCategory("Healthy");
    } else if (userBMI >= 25 && userBMI <= 29.9) {
      setWeightCategory("Over Weight");
    } else if (userBMI >= 30) {
      setWeightCategory("Obese");
    } else {
      setWeightCategory("Check Input Values");
    }
  }, [weight, height]);

  useEffect(() => {
    // calling the api call for chosen goal
    exerciseAPI(goal)
      .then((data) => {
        console.log(data);
        setExercise(data);
      })
      .catch((error) => {
        console.error("Error fetching BMI:", error);
      });
  }, [goal]);

  return (
    <div className="full-container">
      <div className="bmi-container">
        <h2 className="bmi-name" style={{ alignItems: "left" }}>
          {" "}
          Hello , {username}
        </h2>
        <div className="emoji-wrapper">
          <p className="bmi-feeling">How are you feeling today?</p>
          <div className="emojiTracker">{EmojiTracker()}</div>
        </div>

        <div className="bmi-result">
          {bmi && <p>Your BMI is: {bmi.toFixed(2)}</p>}
          {weightCategory && <p>BMI category : {weightCategory} </p>}

          {goal && <p>Goal for today : {goal}</p>}
        </div>
      </div>
      {/* <h1 className="workouts-title">Your workouts</h1> */}
      <WaterTracker />
      <ExerciseDetail goal={goal} />

      {/* <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "10%" }}>
  <Link to="/ProgressTracker" className="progress-button" style={{ textAlign: "center" }}>View Progress</Link>
</div> */}

     

      
    </div>
  );
};

export default WorkoutPlan;
