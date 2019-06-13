import React from 'react';

import { muscles, exercises } from '../store';

import { Header, Footer } from './Layouts/';
import Exercises from './Exercises/';


class App extends React.Component {

  state = {
    exercises,
    exercise: {}
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

  handleCategorySelected = (category) => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = (id) => {
    this.setState(({ exercises }) => {
      return {
        exercise: exercises.find((ex) => ex.id === id)
      }
    })
  }

  render() {
    const exercises = this.getExerciseByMuscles();
    const { category, exercise } = this.state;
    return (
      <React.Fragment>
        <Header />

        <Exercises 
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />

        <Footer 
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </React.Fragment>
    );
  }
}

export default App;
