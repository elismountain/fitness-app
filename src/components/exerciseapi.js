
import axios from 'axios';

const exerciseAPI = async (goal) => {
  let goal1= goal.toLowerCase()
  console.log(goal1)
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${goal1}`,
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '8d53762f7cmsh85d426eae7f5ae5p1c21c7jsnbe6b01f1cc80',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export default exerciseAPI;