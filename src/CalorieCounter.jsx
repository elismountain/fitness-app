import React, { useState } from 'react';

function CalorieCounter() {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    const newEntry = { foodItem, calories: parseInt(calories) };
    setEntries([...entries, newEntry]); // Adds the new entry to the entries array
    setFoodItem(''); // Resets the food item input
    setCalories(''); // Resets the calorie input
  };

  const totalCalories = entries.reduce((total, entry) => total + entry.calories, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Calorie Counter</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          placeholder="Food Item"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          required
        />
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
          style={{ width: '100%', padding: '8px' }}
          required
        />
        <button type="submit" style={{ width: '100%', padding: '8px', marginTop: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Entry</button>
      </form>
      <h3>Total Calories: {totalCalories}</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {entries.map((entry, index) => (
          <li key={index} style={{ marginBottom: '5px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>{`${entry.foodItem}: ${entry.calories} calories`}</li>
        ))}
      </ul>
    </div>
  );
}

export default CalorieCounter;
