import React from 'react';

import { muscles, exercises } from '../store';

import { Header, Footer } from './Layouts/';
import Exercises from './Exercises/';


class App extends React.Component {

  state = {
    exercises
  }

  getExerciseByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

        return exercises;
      }, {})
    )
  }

  render() {
    const exercises = this.getExerciseByMuscles();
    return (
      <React.Fragment>
        <Header />

        <Exercises 
          exercises={exercises}
        />

        <Footer 
          muscles={muscles}
        />
      </React.Fragment>
    );
  }
}

export default App;
