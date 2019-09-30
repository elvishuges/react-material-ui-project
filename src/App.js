import React from 'react';
import Routes from './config/routes'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div>  
      <NavBar/>    
      <Routes/>      
    </div>
  );
}

export default App;
