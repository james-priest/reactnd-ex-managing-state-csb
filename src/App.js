import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }*/
  // Defining state as a Class field means we can avoid doing it in the constructor
  state = {
    numQuestions: 0,
    numCorrect: 0
  };
  /*handleButtonClick(e) { // <- this form means we need to bind 'this' in constructor
    console.log('e.target', e.target.innerText);
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1
    }))
  }*/
  handleButtonClick = isCorrect => {
    // <- this form doesn't require bind 'this' in constructor
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
      numCorrect: isCorrect ? currState.numCorrect + 1 : currState.numCorrect
    }));
  };
  renderGame = game => <Game onButtonClick={this.handleButtonClick} />;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise - Managing State</p>
        </header>
        <main className="App-main">
          <Game onButtonClick={this.handleButtonClick} />
          {/*
            // These cause re-render of Game components
            <Game key='2' onButtonClick={this.handleButtonClick.bind(this)} />
            <Game key='2' onButtonClick={(e) => this.handleButtonClick(e)} />
            */}
          {this.renderGame()}
          <Score
            numQuestions={this.state.numQuestions}
            numCorrect={this.state.numCorrect}
          />
        </main>
      </div>
    );
  }
}

export default App;
