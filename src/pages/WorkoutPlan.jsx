import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import calculateBMI from "../components/BMI";
import EmojiTracker from "../components/emoji";
import exerciseAPI from "../components/exerciseapi";
import weightCategory from "../components/weightCategory";
import ExerciseDetail from "./ExerciseDetail";

const WorkoutPlan = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const goal = searchParams.get("goal");

  // Directly parse to float here to avoid re-declaring inside useEffect
  const height = parseFloat(searchParams.get("height"));
  const weight = parseFloat(searchParams.get("weight"));

  const [bmi, setBmi] = useState("");
  const [exercise, setExercise] = useState([]);
  const [weightC, setWeightCategory] = useState("");

  // useeffect hook to calculate bmi
  useEffect(() => {
    console.log(weight, height);
    // Check if height and weight are valid numbers before calling calculateBMI
    if (!isNaN(height) && !isNaN(weight)) {
      calculateBMI(weight, height)
        .then((data) => {
          console.log(`Data received from BMI call:`, data);
          // Assuming data is the BMI value directly; adjust according to your function's return structure
          setBmi(data.bmi);
        })
        .catch((error) => {
          console.error("BMI calculation error:", error);
        });
    }
  }, [weight, height]);
  // trial
  useEffect(() => {
    // Check if height and weight are valid numbers before calling calculateBMI

    // Assuming calculateBMI expects two arguments: weight and height
    exerciseAPI(goal)
      .then((data) => {
        console.log(data);
        // Check if data and data.bmi exist before calling setBmi to avoid errors
        setExercise(data);
      })
      .catch((error) => {
        console.error("Error fetching BMI:", error);
      });
  }, [goal]);

  // react hook to fetch weight category
  useEffect(() => {
    console.log(bmi);
    // Check if height and weight are valid numbers before calling calculateBMI
    if (bmi > 0) {
      weightCategory(bmi)
        .then((data) => {
          console.log(`Data received from weight category call:`, data);
          // Assuming data is the BMI value directly; adjust according to your function's return structure
          setWeightCategory(data.weightCategory);
        })
        .catch((error) => {
          console.error("Weight Category calculation error:", error);
        });
    }
  }, [bmi]);

  return (
    <div className="container-fluid bmi-box">
      <h2 style={{ alignItems: "left" }}>Welcome , {username}</h2>
      <p>How are you feeling today?</p>
      <div>{EmojiTracker()}</div>
      <div>
        {bmi && <p>Your BMI is: {bmi.toFixed(2)}</p>}
        {weightC && <p>Your BMI is within the {weightC} category</p>}
        {goal && <p>Goal for today : {goal}</p>}

        {exercise.map((exercise, index) => (
          <div key={index}>
            {exercise.name}
            <img src={exercise.gifUrl}></img>
          </div>
        ))}
      </div>
      <ExerciseDetail />
    </div>
  );
};

export default WorkoutPlan;
