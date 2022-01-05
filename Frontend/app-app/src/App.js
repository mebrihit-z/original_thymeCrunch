import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState, useEffect}from "react"
import Users from './components/Users';
import {Navbar} from './components/Navbar';
import Home  from './components/pages/Home';
import Login from './components/pages/Login';
import UpdateProfile from './components/pages/UpdateProfile';
import Desserts from './components/pages/meals/Desserts';
import Snacks from './components/pages/meals/Snacks'
import Breakfast from './components/pages/meals/Breakfast';
import Lunch from './components/pages/meals/Lunch';
import Dinner from './components/pages/meals/Dinner';
import Logout from './components/pages/Logout';
import Recipes from './components/pages/Recipes';
import SignUp from './components/pages/SignUp';
import Beverages from './components/pages/meals/Beverages';

function App() {
  return (
    
    <>
    <Router>
    
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="users" element ={<Users/>}/>
        {/* THESE NEED TO BE DEFINED WITH API CALLS AND LOGIC */}
        {/* <Route path ="/profile/{id]" element={<Profile/>}/> */}
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/recipes" element={<Recipes/>}/>
        <Route path ="/update" element={<UpdateProfile/>}/>
        <Route path ="/dessert" element={<Desserts/>}/>
        <Route path ="/snacks" element={<Snacks/>}/>
        <Route path ="/breakfast" element={<Breakfast/>}/>
        <Route path ="/lunch" element={<Lunch/>}/>
        <Route path ="/dinner" element={<Dinner/>}/>
        <Route path ="/beverages" element={<Beverages/>}/>
        <Route path ="/sign-up" element={<SignUp/>}/>
        <Route path ="/logout" element={<Logout/>}/>

      </Routes>
    </Router>
    </>
   
  );
}

export default App;
