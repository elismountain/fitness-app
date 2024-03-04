import React, { useState, useEffect } from 'react';
import "../styles/watertracker.css"

const WaterTracker = () => {
  const [intake, setIntake] = useState(() => {
    // Retrieve intake from local storage or start with 0
    const savedIntake = localStorage.getItem('waterIntake');
    return savedIntake ? JSON.parse(savedIntake) : 0;
  });
  const [goal, setGoal] = useState(() => {
    // Retrieve goal from local storage or default to 2000ml
    const savedGoal = localStorage.getItem('waterGoal');
    return savedGoal ? JSON.parse(savedGoal) : 2000;
  });
  const [addAmount, setAddAmount] = useState(250); // Amount to add per button press
  const [clickCount, setClickCount] = useState(0);

  // Update local storage when intake or goal changes
  useEffect(() => {
    localStorage.setItem('waterIntake', JSON.stringify(intake));
    localStorage.setItem('waterGoal', JSON.stringify(goal));
  }, [intake, goal]);

  const handleAddIntake = () => {
    if (clickCount < 12) {
      setIntake(intake + addAmount);
      setClickCount(clickCount + 1);
    }
  };

  const handleGoalChange = (e) => {
    setGoal(Number(e.target.value));
  };

  const handleAddAmountChange = (e) => {
    setAddAmount(Number(e.target.value));
  };

  // Reminder setup (for demonstration, real implementation may vary)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (Notification.permission === "granted") {
  //       new Notification("Time to drink some water!");
  //     }
  //   }, 3600000); // 1 hour in milliseconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className='watertracker container-fluid d-flex flex-column justify-content-center align-items-center'>
      <h2>Water Intake Tracker</h2>
      {/* <p>Today's intake: {intake}ml of {goal}ml</p> */}
      <div className='inputs container d-flex flex-column justify-content-evenly '>  
        <div className='field'>
        <label>  Add (ml) : </label>
        <input type="number" max="3000"  style={{ width: '60px', backgroundColor : 'rgba(0, 0, 0, 0.089)' , color : "white" }} value={addAmount} onChange={handleAddAmountChange} />

      </div>
      <div className='field'>
        <label>Daily Goal (ml): </label>
        <input type="number" style={{ width: '60px', backgroundColor : "rgba(0, 0, 0, 0.089)" ,color : "white"}} value={goal} onChange={handleGoalChange} />
      </div>
      </div>
    
      <button onClick={handleAddIntake} disabled={clickCount >= 12}>Add</button>
      <div className="progress-bar-container">
  <div className="progress-bar" style={{ width: `${Math.min((intake / goal) * 100, 100)}%` }}></div>
</div>

      <div style={{ width: '100%', backgroundColor: '#ddd', marginTop: '10px' }}>
        {/* <div style={{ height: '24px', width: `${(intake / goal) * 100}%`, backgroundColor: 'blue' }}></div> */}
      </div>
    </div>
  );
};

export default WaterTracker;
