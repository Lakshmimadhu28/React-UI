import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import ImageSection from './ImageSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Content />
          <ImageSection />
        </main>
      </div>
    );
  }
}

export default App;
