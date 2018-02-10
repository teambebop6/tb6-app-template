import React, { Component } from 'react';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <main>
        {
          routes
        }
      </main>
    );
  }
}

export default App;
