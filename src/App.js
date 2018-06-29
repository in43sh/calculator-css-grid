import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="screen"></div>
          <div className="clear">AC</div>
          <div className="negative-sign">+/-</div>
          <div className="percentage">%</div>
          <div className="divide">/</div>
          <div className="seven">7</div>
          <div className="eight">8</div>
          <div className="nine">9</div>
          <div className="multiply">*</div>
          <div className="four">4</div>
          <div className="five">5</div>
          <div className="six">6</div>
          <div className="substitute">-</div>
          <div className="one">1</div>
          <div className="two">2</div>
          <div className="three">3</div>
          <div className="plus">+</div>
          <div className="zero">0</div>
          <div className="dot">.</div>
          <div className="equals">=</div>
        </div>
      </div>
    );
  }
}

export default App;
