import React, { Component } from 'react';
import './styles/App.css';

export class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={'/assets/images/logo.svg'}
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
