import React from 'react';
import Timer from '../components/Timer';
import './TimerPage.css';

const TimerPage = () => {
  return (
    <div className="timer-block">

      <div className="description">
        <h2 className='description-header'>Description</h2>
        <p className="description-text">This is the description of the exercise.</p>
      </div>
      <div className="demonstration">
        <h2 className='demonstration-header'>Video Demonstration</h2>
        <iframe width="560" height="315" ></iframe>
      </div>
      <div className='timer-wrap'>
        <Timer />
      </div>
    </div>
  );
}

export default TimerPage;

