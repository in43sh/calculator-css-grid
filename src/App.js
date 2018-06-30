import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="box screen"></div>
          <div className="box btn operator clear">AC</div>
          <div className="box btn operator negative-sign">±</div>
          <div className="box btn operator percentage">%</div>
          <div className="box btn operator divide">/</div>
          <div className="box btn seven">7</div>
          <div className="box btn eight">8</div>
          <div className="box btn nine">9</div>
          <div className="box btn operator multiply">*</div>
          <div className="box btn four">4</div>
          <div className="box btn five">5</div>
          <div className="box btn six">6</div>
          <div className="box btn operator substitute">-</div>
          <div className="box btn one">1</div>
          <div className="box btn two">2</div>
          <div className="box btn three">3</div>
          <div className="box btn operator plus">+</div>
          <div className="box btn zero">0</div>
          <div className="box btn dot">.</div>
          <div className="box btn operator equals">=</div>
        </div>
      </div>
    );
  }
}

export default App;
