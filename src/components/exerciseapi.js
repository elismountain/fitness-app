import axios from 'axios';

const exerciseAPI = async (goal) => {
  let goal1 = goal.toLowerCase();
  console.log(`Goal to API call ${goal1}`);

  // add own api key
  // let rapidApiKey = "";

  // api call to exercisedb
  const options = {
    method: 'GET',
    params: {
      limit: '10'
    },
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${goal1}`,
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`Error calling the Excercise API: ${error}`);

    if (error.response.status == 429) {
      alert(`Message from Excercise API call: ${error.response.data.message || error.response.data || error.response}`);
    }

    return [];
  }
};

export default exerciseAPI;