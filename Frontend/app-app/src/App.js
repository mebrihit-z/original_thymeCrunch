import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import axios from "axios";
import React, {useState, useEffect}from "react"
import { UserProfiles } from './components/UserProfiles';

function App() {
  return (
    
    <div className="App">
     {/* <Test></Test> */}
    <UserProfiles/>

    </div>
   
  );
}

export default App;
