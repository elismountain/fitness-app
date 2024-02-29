import React from 'react';
import { useLocation } from 'react-router-dom';

const WorkoutPlan = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {username}</p>
      {/* Add your workout plan content here */}
    </div>
  );
};

export default WorkoutPlan;
