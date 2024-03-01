import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import './Home.css';


const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    navigate(`/workout-plan?username=${encodeURIComponent(formData.name)}&height=${encodeURIComponent(formData.height)}&weight=${encodeURIComponent(formData.weight)}&goal=${encodeURIComponent(formData.goal)}`);
  };

  return (
    <div class= "body">
      <h1>WONDER WOMAN WORKOUT</h1>
      <h2>Every workout is a step towards becoming Wonder Woman. </h2>
      <SignIn onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
