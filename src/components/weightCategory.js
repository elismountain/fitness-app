
import axios from 'axios';

const weightCategory = async (bmi) => {
  const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category',
    params:  {bmi},
    headers: {
      'X-RapidAPI-Key': '8d53762f7cmsh85d426eae7f5ae5p1c21c7jsnbe6b01f1cc80',
      'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(`weightCategory call response`, response);
    return response.data;
  } catch (error) {
    console.error(`Error calling the weight Category API: ${error}`);

    if (error.response.status == 429) {
      alert(`Message from weight category API call: ${error.response.data.message || error.response.data || error.response}`);
    }

    return null;
  }
};

export default weightCategory;