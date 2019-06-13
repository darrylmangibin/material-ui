import React from 'react';

import { Header, Footer } from './Layouts/';
import Exercises from './Exercises/';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Exercises />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
