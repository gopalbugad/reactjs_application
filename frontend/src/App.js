import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
