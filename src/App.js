import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './Demo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <List></List>    
        </p>
      </header>
    </div>
  );
}

export default App;
