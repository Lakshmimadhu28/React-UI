
import React, { Component } from 'react';
import './ImageSection.css';

class ImageSection extends Component {
  render() {
    return (
      <div className="image-section">
        <img
          src="/flower.jpg"  
          alt="Flower"
        />
      </div>
    );
  }
}

export default ImageSection;
