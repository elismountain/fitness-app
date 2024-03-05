import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmojiTracker from "../components/emoji";
import exerciseAPI from "../components/exerciseapi";
import ExerciseDetail from "./ExerciseDetail";
import "../styles/WorkoutPlan.css";
import WaterTracker from "../components/watertracker";

const WorkoutPlan = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const usergoal = searchParams.get("goal");

  // parse float the user input
  const height = parseFloat(searchParams.get("height"));
  const weight = parseFloat(searchParams.get("weight"));

  const storedHeight = localStorage.getItem("height");
  const userHeight = height || storedHeight

  const storedWeight = localStorage.getItem("weight");
  const userWeight = weight || storedWeight

  const storedGoal = localStorage.getItem("goal");
  const goal =  usergoal || storedGoal

  

  const [bmi, setBmi] = useState("");
  const [exercise, setExercise] = useState([]);
  const [weightCategory, setWeightCategory] = useState("");


  // re using saved data from local storage
  const storedName = localStorage.getItem("name")
  const userName = username || storedName




  useEffect(() => {
    const userBMI = userWeight / (userHeight * userHeight);
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
        console.error("Error fetching excercise:", error);
      });
  }, [goal]);

  return (
    <div className="full-container">
      <div className="bmi-container">
        <h2 className="bmi-name" style={{ alignItems: "left" }}>
          {" "}
          Hello , {userName}
        </h2>
        <div className="emoji-wrapper">
          <p className="bmi-feeling" style={{textTransform: "capitalize"}}>How are you feeling today?</p>
          <div className="emojiTracker">{EmojiTracker()}</div>
        </div>

        <div className="bmi-result">
          {bmi && <p>Your BMI is: {bmi.toFixed(2)}</p>}
          {weightCategory && <p>BMI category : {weightCategory} </p>}

          {goal && <p>Goal for today : {goal}</p>}
        </div>
      </div>
      <WaterTracker />
      <ExerciseDetail goal={goal} />
      </div>
  );
};

export default WorkoutPlan;
