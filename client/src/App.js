import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [name, setName] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://pern-service.onrender.com/name', {mode:'cors'});
        // const response = await fetch('http://localhost:5000/name', {mode:'cors'});
        const data = await response.json();
        console.log({ data })
        setName(data.name);
      }
      catch {
        console.log("error");
      }
    }
    fetchData();
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          <h1>
            Hello { name }!
          </h1>
        }
        
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
    </div>
  );
}

export default App;
