
import axios from 'axios';

const rapidApiKey = 'set-your-rapid-api-key'; // set your Rapid API Key

const calculateBMI = async (weight, height, bmi) => {
  const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
    params: { weight: weight, height: height, bmi: bmi},
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    }
  };

  console.log(`Calculating BMI for weight:${weight}, height:${height} and bmi:${bmi}`)

  try {
    const response = await axios.request(options);
    console.log(`BMI API call response`, response);
    return response.data;
  } catch (error) {
    console.error(`Error calling the BMI API: ${error}`);

    if (error.response.status == 429) {
      alert(`Message from BMI API call: ${error.response.data.message || error.response.data || error.response}`);
    }

    return null;
  }
};

export default calculateBMI;