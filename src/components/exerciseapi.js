import axios from 'axios';
// import ExerciseDetail from '../pages/ExerciseDetail';

const ExerciseApi = async(goal) => {
const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {
    limit: '10'
  },
  headers: {
    'X-RapidAPI-Key': '782a4f5d39mshfed6b9e82b8570cp19c875jsn47975f1203a0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  const exercisesArray = response.data.results;

  return exercisesArray;

} catch (error) {
	console.error(error);
}
};

export { exercisesArray };