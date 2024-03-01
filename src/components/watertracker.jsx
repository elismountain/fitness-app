import React, { useState, useEffect } from 'react';

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

  // Update local storage when intake or goal changes
  useEffect(() => {
    localStorage.setItem('waterIntake', JSON.stringify(intake));
    localStorage.setItem('waterGoal', JSON.stringify(goal));
  }, [intake, goal]);

  const handleAddIntake = () => {
    setIntake(intake + addAmount);
  };

  const handleGoalChange = (e) => {
    setGoal(Number(e.target.value));
  };

  const handleAddAmountChange = (e) => {
    setAddAmount(Number(e.target.value));
  };

  // Reminder setup (for demonstration, real implementation may vary)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Notification.permission === "granted") {
        new Notification("Time to drink some water!");
      }
    }, 3600000); // 1 hour in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Water Intake Tracker</h2>
      <p>Today's intake: {intake}ml of {goal}ml</p>
      <div>
        <label>Add ml: </label>
        <input type="number" value={addAmount} onChange={handleAddAmountChange} />
      </div>
      <div>
        <label>Daily Goal: </label>
        <input type="number" value={goal} onChange={handleGoalChange} />
      </div>
      <button onClick={handleAddIntake}>Add</button>
      <div style={{ width: '100%', backgroundColor: '#ddd', marginTop: '10px' }}>
        <div style={{ height: '24px', width: `${(intake / goal) * 100}%`, backgroundColor: 'blue' }}></div>
      </div>
    </div>
  );
};

export default WaterTracker;
