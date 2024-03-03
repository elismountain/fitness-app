import React, { useState, useEffect } from 'react';

const ProgressTracker = () => {
  
  const [mood, setMood] = useState(localStorage.getItem("emoji") || '😐');
  const [goalAchieved, setGoalAchieved] = useState(localStorage.getItem("goal") || '0');
  const [durationOfExercise, setDurationOfExercise] = useState(JSON.parse(localStorage.getItem('timerDurations')) || '0');
  const [waterIntake, setWaterIntake] = useState(localStorage.getItem("waterIntake") || '0');

  
  const clearData = () => {
    localStorage.clear(); 
 
    setMood('');
    setGoalAchieved('0');
    setDurationOfExercise('0');
    setWaterIntake('0');
  };

 
  useEffect(() => {
    setMood(localStorage.getItem("emoji") || '😐');
    setGoalAchieved(localStorage.getItem("goal") || '0');
    setDurationOfExercise(JSON.parse(localStorage.getItem('timerDurations')) || '0');
    setWaterIntake(localStorage.getItem("waterIntake") || '0');
  }, []);

  return (
    <div>
      <div className="description">
        <h2 className='description-header'>Your Progress </h2>
        <p className="description-text">Mood : {mood} </p>
        <p className="description-text">Water Intake : {waterIntake}</p>
        <p className="description-text">Goals achieved : {goalAchieved} </p>
        <p className="description-text">Duration of Exercise : {durationOfExercise} minutes </p>
      </div>
      <button onClick={clearData}>CLEAR ALL DATA</button>
    </div>
  );
}

export default ProgressTracker;
