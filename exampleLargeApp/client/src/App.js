import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example ReactJS Blog ! </h1>
        <div className="btn-row">
          <button id="createBtn">Create Post</button>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <th>Author</th>
            <th>Subject</th>
          </tr>
          <tr>
            <td>5.26.20</td>
            <td>Yael</td>
            <td>This is a example post!</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
