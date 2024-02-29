import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Handle form submission here
    navigate(`/workout-plan?username=${encodeURIComponent(formData.name)}`);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <SignIn onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
