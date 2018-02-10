/**
 * Created by Henry Huang.
 */
import React, { Component } from 'react';
import TopBar from '../common/TopBar/TopBar';

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <div>
          This is admin!
        </div>
      </div>
    );
  }
}

export default Home;
