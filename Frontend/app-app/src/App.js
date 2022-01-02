import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState, useEffect}from "react"
import { UserProfiles } from './components/UserProfiles';
import {Navbar} from './components/Navbar';

function App() {
  return (
    
    <>
    <Router>
    
      <Routes>
        <Route path ="users" element ={<UserProfiles/>}/>
        <Route path ="/" element={<Navbar/>}/>

      </Routes>
    </Router>
    </>
   
  );
}

export default App;
