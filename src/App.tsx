import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (    
    <div className="App">
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Hello, World!</h1>
      <p>Welcome to your React TypeScript project running in a dev container!</p>
      <p>Have a nice day.</p>
      <p>Is this updating now? I hope so. </p>
    </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> 
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

export default App;
