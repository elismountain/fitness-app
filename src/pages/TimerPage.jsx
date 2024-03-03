import React from 'react';
import Timer from '../components/Timer';
import './TimerPage.css';
import { useLocation } from "react-router-dom";

const TimerPage = () => {
  const location = useLocation();
  const exercise = location.state?.exercise;
  console.log("Received exercise: ", exercise);

  return (
    <div className="timer-block">
      
      <div className="description">
        <h2 className='description-header'>
          {exercise.name}
          </h2>
        <p className="description-text">
          {exercise.instructions}
          </p>
      </div>
      <div className="video-container">
      <h2 className='description-header'>
          Warm Up
          </h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qZkxKTxXY8M?si=sDBmxv_V6acpbY-i" 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
      <div className="demonstration">
        <h2 className='demonstration-header'>Video/GIF Demonstration</h2>
        <iframe src={exercise.gifUrl} width="560" height="315">
        </iframe>
      </div>
      <div className='timer-wrap'>
        <Timer />
      </div>
    </div>
  );
}

export default TimerPage;

