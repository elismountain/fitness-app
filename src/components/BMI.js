
import axios from 'axios';

const calculateBMI = async (weight, height) => {
  const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
    params: { weight: weight, height: height},
    headers: {
      'X-RapidAPI-Key': '782a4f5d39mshfed6b9e82b8570cp19c875jsn47975f1203a0',
      'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error calling the BMI API:', error);
    return null;
  }
};

export default calculateBMI;