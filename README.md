# HAPPYFIIT - Fitness App

HappyFiit is a comprehensive fitness application crafted to cater to the needs of fitness enthusiasts, regardless of gender, providing an array of resources and tools to aid users in their journey to achieve and maintain optimal fitness levels. Developed as the culminating project for the edX "Front End Development" Bootcamp, HappyFiit embodies a commitment to fostering a healthy lifestyle through technology.

## How to Run Locally

To run the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/elismountain/fitness-app
   ```

1. Navigate to the project directory:

   ```bash
   cd happyfiit
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Add API key from Rapid API:

   - You can your API key using this link https://docs.rapidapi.com/docs/keys-and-key-rotation from rapid api.

   - After geting your key you need to set it in the file exerciseapi.js

   ```
   // add own api key
   let rapidApiKey = "Your_RapidAPI_Key";
   ```

1. Start the development server:

   ```bash
   npm run dev
   ```

1. Once the server is running, open your web browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Usage

To use HappyFiit App, follow these steps:

1. **Fill the Form on the Main Page**: Enter your name, age, weight, height, and goal in the form on the main page. Then press the "I am ready" button.

2. **View BMI Result and Water Intake Tracker**: Upon reaching the workout page, you'll see your BMI result and water intake tracker. You can also select your exercise from the available options.

3. **Start Exercise Timer**: After selecting an exercise, you'll be directed to the timer page where you'll find a description of the workout and a 10-minute timer. For a 5-minute warm-up, watch the YouTube video [here](https://www.youtube.com/watch?v=qZkxKTxXY8M). Once you press the start button, the countdown begins.

4. **Track Progress**: To view your progress, click on the "View Progress" button on the progress tracker page. Here, you'll find details about your progress.

## API Used

HappyFiit integrates with the following APIs to enhance its functionality:

- **ExerciseDB API:** Integrates an API to fetch images related to various workout routines, enhancing user engagement and visual appeal within the application. You can view the API [here.](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)

## Features

HappyFiit offers a variety of features to help users track their fitness progress and maintain a healthy lifestyle:

- **Progress Tracker:** Keep track of your fitness progress over time, allowing you to set and achieve your fitness goals effectively.

- **Water Intake Tracker:** Monitor your daily water intake to ensure proper hydration throughout the day, promoting overall well-being.

- **BMI Calculator:** Calculate your Body Mass Index (BMI) to assess your body composition and monitor changes in your weight and fitness levels.

- **Mood Tracker:** Log your mood into the app to keep track of your emotional well-being.

- **Timer:** The app features an integrated timer that allows users to time their exercises. The duration of each exercise is automatically logged into the progress tracker for easy access.

- **Warm-Up:** The app includes an integrated warm-up video, allowing users to engage in a warm-up session should they choose to do so.

- **Exercise Demonstration** Users can view a selection of demonstration GIFs tailored to their goals, as chosen on the sign-in page. This allows users to select the exercises they wish to perform.


## Technologies Used

- React
- Node.js
- Vite
- React Bootstrap
- Material UI
- Google Fonts
- Rapid API
- Git
- Github
- Netlify

## Project Contributors

- [Aleisha Rhys](https://github.com/aleisharhys)
- [Andrea Nt Fontana](https://github.com/AndyFt)
- [Chrisma Stephen](https://github.com/chrisma89)
- [Olga Avramenko](https://github.com/elismountain)
- [Samira Balayoglu](https://github.com/SamiraBalayoglu)

### Teaching Assistant

- Zakariya Hussain

## Credits
 
Thanks to [Becky Fox](https://www.thebeckyfox.com/) for the warm up video. The video is [here.](https://www.youtube.com/watch?v=qZkxKTxXY8M&t=2s)

## Deployment

The project has been deployed to Netlify. You can access it [here.](https://happyfiit.netlify.app/)

## The link to Github Repository

The project's repository can be found [here.](https://github.com/elismountain/fitness-app)

## Home Page Screenshot

![HappyFiit Main Page](/src/assets/images/screenshot.png)
