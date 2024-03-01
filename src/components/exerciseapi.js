import axios from 'axios';

const rapidApiKey = 'set-your-rapid-api-key'; // set your Rapid API Key

const ExerciseApi = async (goal) => {
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: {
      limit: '10'
    },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  console.log(`Getting goal ${goal}`)

  try {
    const response = await axios.request(options);
    console.log(`Excercise API call response`, response);
    const exercisesArray = response.data;

    return exercisesArray;
  } catch (error) {
    console.log(`Error calling the Excercise API: ${error}`);

    if (error.response.status == 429) {
      alert(`Message from Excercise API call: ${error.response.data.message || error.response.data || error.response}`);
    }

    return [];
  }
};

export default ExerciseApi;