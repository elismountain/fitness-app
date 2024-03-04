import React, { useState, useEffect } from "react";
import "./progresstracker.css";

const ProgressTracker = () => {
  const [mood, setMood] = useState(localStorage.getItem("emoji") || "😐");
  const [goalAchieved, setGoalAchieved] = useState(
    localStorage.getItem("goal") || "0"
  );
  const [durationOfExercise, setDurationOfExercise] = useState(
    JSON.parse(localStorage.getItem("timerDurations")) || "0"
  );
  const [waterIntake, setWaterIntake] = useState(
    localStorage.getItem("waterIntake") || "0"
  );

  const clearData = () => {
    localStorage.clear();

    setMood("");
    setGoalAchieved("0");
    setDurationOfExercise("0");
    setWaterIntake("0");
  };

  useEffect(() => {
    setMood(localStorage.getItem("emoji") || "😐");
    setGoalAchieved(localStorage.getItem("goal") || "0");
    setDurationOfExercise(
      JSON.parse(localStorage.getItem("timerDurations")) || "0"
    );
    setWaterIntake(localStorage.getItem("waterIntake") || "0");
  }, []);

  return (
    <div className="description-container">
      <div className="description">
        <h2 className="description-header">Your Progress</h2>
        <div className="description-text-container">
          <div className="description-text">
            <h5 className="description-text-title">Mood</h5>
            <p> {mood} </p>
          </div>
          <div className="description-text">
            <h5 className="description-text-title">Water Intake</h5>
            <p> {waterIntake} ml</p>
          </div>
          <div className="description-text">
            <h5 className="description-text-title">Goals achieved</h5>
            <p> {goalAchieved} </p>
          </div>
          <div className="description-text">
            <h5 className="description-text-title">Duration of Exercise</h5>
            <p> {durationOfExercise} minutes </p>
          </div>
        </div>
      </div>
      <button onClick={clearData}>CLEAR ALL DATA</button>
    </div>
  );
};

export default ProgressTracker;
