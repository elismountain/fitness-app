import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import '../styles/Home.css';


const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    navigate(`/workout-plan?username=${encodeURIComponent(formData.name)}&height=${encodeURIComponent(formData.height)}&weight=${encodeURIComponent(formData.weight)}&goal=${encodeURIComponent(formData.goal)}`);
  };

  return (
    <div className= "body">
      <h1 className="home-title">HappyFiit</h1>
      <h2 className="home-description">More than fitness, it's your happy place.</h2>
      <SignIn onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
