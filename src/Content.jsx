import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="content-section">
        <h1>Grow your skills, define your future</h1>
        <p>
          Presenting Academy, the tech school of the future. We teach you the
          right skills to be prepared for tomorrow.
        </p>
        <div className="buttons">
          <button className="explore-button">Explore Courses</button>
          <button className="learn-button">Learn More</button>
        </div>
      </div>
    );
  }
}

export default Content;
