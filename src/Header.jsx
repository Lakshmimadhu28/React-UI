import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">Quest</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#pages">Pages</a>
          <a href="#blog">Blog</a>
        </nav>
      </header>
    );
  }
}

export default Header;
