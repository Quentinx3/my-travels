import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Voyages</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <Travel
          destination="Guatemala"
          country="Antigua"
          distance="9061 km"
          image="https://images.unsplash.com/photo-1532443859453-b840b8aad16e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59315a9a943c1516568e67cba994190d&auto=format&fit=crop&w=2458&q=80"
        />
        <Travel
          destination="Japan"
          country="Osaka"
          distance="9868 km"
          image="https://images.unsplash.com/photo-1522177743530-6dcab6baa5f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d916a57f96ac5eb97eced8f25756f93e&auto=format&fit=crop&w=2380&q=80"
        />
      </div>
    );
  }
}

export default App;
