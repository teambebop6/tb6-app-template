import React, { Component } from 'react';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <main>
        {
          routes.map((route, index) => (
            <div key={String(index)}>
              {
                route
              }
            </div>
          ))
        }
      </main>
    );
  }
}

export default App;
