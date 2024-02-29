import React, { useState } from 'react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const calculateBMI = (event) => {
        event.preventDefault();
        const bmiValue = calculateBMIValue(weight, height);
        setBMI(bmiValue);
    };

    const calculateBMIValue = (weight, height) => {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100; // Convert height to meters
        const bmiValue = weightInKg / (heightInM * heightInM);
        return bmiValue.toFixed(2); // Limit to 2 decimal places
    };

    return (
        <div>
            <h2>BMI Calculator</h2>
            <form onSubmit={calculateBMI}>
                <label>
                    Weight (kg):
                    <input type="number" value={weight} onChange={handleWeightChange} />
                </label>
                <br />
                <label>
                    Height (cm):
                    <input type="number" value={height} onChange={handleHeightChange} />
                </label>
                <br />
                <button type="submit">Calculate BMI</button>
            </form>
            {bmi && <p>Your BMI is: {bmi}</p>}
        </div>
    );
};

export default BMICalculator;
