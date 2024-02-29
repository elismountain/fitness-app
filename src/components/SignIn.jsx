import React, { useState } from 'react';

const SignIn = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');
  const [goalError, setGoalError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }

    if (!age.trim()) {
      setAgeError('Age is required');
      return;
    } else {
      setAgeError('');
    }

    if (!weight.trim()) {
      setWeightError('Weight is required');
      return;
    } else {
      setWeightError('');
    }

    if (!height.trim()) {
      setHeightError('Height is required');
      return;
    } else {
      setHeightError('');
    }

    if (!goal.trim()) {
      setGoalError('Goal is required');
      return;
    } else {
      setGoalError('');
    }

    onSubmit({ name, age, weight, height, goal });
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
    setGoal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
      </div>
      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        {weightError && <p style={{ color: 'red' }}>{weightError}</p>}
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        {heightError && <p style={{ color: 'red' }}>{heightError}</p>}
      </div>
      <div>
        <label htmlFor="goal">Goal:</label>
        <select
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        >
          <option value="">Select Goal</option>
          <option value="Cardio">Cardio</option>
          <option value="HIIT">HIIT</option>
          <option value="Upper Body">Upper Body</option>
          <option value="Lower Body">Lower Body</option>
          <option value="ABS">ABS</option>
          <option value="Neck and Shoulders">Neck and Shoulders</option>
        </select>
        {goalError && <p style={{ color: 'red' }}>{goalError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
