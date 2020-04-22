import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/UserItem';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Users/>
    </div>
  );
}

export default App;
