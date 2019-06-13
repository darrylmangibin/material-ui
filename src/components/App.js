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

  handleExerciseCreate = (exercise) => {
    this.setState(prevState => {
      return {
        exercises: [
          ...prevState.exercises,
          exercise
        ]
      }
    })
    console.log(this.state.exercises)
  }


  render() {
    const exercises = this.getExerciseByMuscles();
    const { category, exercise } = this.state;
    return (
      <React.Fragment>
        <Header 
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />

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
