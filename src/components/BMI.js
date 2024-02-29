
import axios from 'axios';

const calculateBMI = async (weight, height) => {
  const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
    params: { weight: weight, height: height},
    headers: {
      'X-RapidAPI-Key': '8d53762f7cmsh85d426eae7f5ae5p1c21c7jsnbe6b01f1cc80',
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