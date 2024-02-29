
import axios from 'axios';

const exerciseAPI = async (goal) => {
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '8d53762f7cmsh85d426eae7f5ae5p1c21c7jsnbe6b01f1cc80',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
export default exerciseAPI;