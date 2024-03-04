import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Timer from "../components/Timer";
import "./TimerPage.css";

const TimerPage = () => {
  const location = useLocation();
  const [exercise, setExercise] = useState(location.state?.exercise || {});
  console.log("Received exercise: ", exercise);

  useEffect(() => {
    localStorage.setItem("chosenExercise", JSON.stringify(exercise));
  }, [exercise]);

  useEffect(() => {
    const storedExercise = localStorage.getItem("chosenExercise");
    if (storedExercise) {
      setExercise(JSON.parse(storedExercise));
    }
  }, []);

  return (
    <div className="timer-block container-fluid">
      <div className="description">
        <h2 className="description-header">{exercise.name}</h2>
        <p className="description-text">{exercise.instructions}</p>
      </div>
      <div className="video-container">
        <h2 className="demonstration-header">Warm Up</h2>
        <div className="iframe-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qZkxKTxXY8M?si=sDBmxv_V6acpbY-i"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="demonstration">
        <h2 className="demonstration-header">Demo</h2>
        <div className="iframe-wrapper">
          <iframe src={exercise.gifUrl} width="560" height="315"></iframe>
        </div>
      </div>
      <div className="timer-wrap">
        <Timer />
      </div>
    </div>
  );
};

export default TimerPage;
