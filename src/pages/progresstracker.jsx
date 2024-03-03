import React from 'react';


const ProgressTracker = () => {

  let mood = localStorage.getItem("emoji");
  let goalachived = localStorage.getItem("goal");
  let durationofexercise = localStorage.getItem("time")
  let waterintake = localStorage.getItem("waterIntake")


  return (
    <div>

      <div className="description">
        <h2 className='description-header'>Your Progress </h2>
        <p className="description-text">Mood : {mood} </p>
        <p className="description-text">Water Intake : {waterintake}</p>
        <p className="description-text">Goals achieved : {goalachived} </p>
        <p className="description-text">Duration of Exercise : {durationofexercise} </p>
      </div>
      <button onClick={()=> localStorage.clear()} >CLEAR ALL DATA</button>

      
    </div>
  );
}

export default ProgressTracker;