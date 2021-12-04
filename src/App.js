import React from 'react';
import logo from './logo.svg';
import './App.css';

import EventManager from './Component/EventManager';
import UserComponent from './Component/UserComponent';
import Route from './Component/Route';

function App() {
  return (
    <div className="App">
        {/* <EventManager/> */}
        <Route/> 
    </div>
  );
}

export default App;
