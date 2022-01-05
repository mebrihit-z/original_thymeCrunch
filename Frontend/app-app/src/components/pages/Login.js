import React from 'react'
import './Login.css';

import '../../App.css';
import UserProfiles  from './UserProfiles';
import VideoSection from '../VideoSection';
import Cards from '../Cards'
import Navbar from '../Navbar';

import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  
  // useEffect(() => {
  //     axios.post(`http://localhost:9090//login/`).then(res => {
  //       const loginStatus = res.data;
  //       console.log(loginStatus)
  //         setLogin(loginStatus);
          
  //     if(loginStatus? "ok": "no"){
  //       console.log("wrong Username or Password")
  //     }else{
  //       console.log("wrong Username or Password")
  //     }
  //     });
  //   }, []);

    return(

        // <>
        //   <Navbar/>
        //   <div className="main1">
        //     <div className="sub-main1">
        //       <div>
        //         <div className="imgs">
        //           <div className="container-image">
        //             {/* {<img src={profile} alt="profile" className="profile"/>} */}
        //             <img src="images/profile.jpg"alt="profile" className="profile"/>
        //           </div>
        //         </div>
        //         <div>
        //           <div>
        //           <h1 id="t1">Login Page</h1>
        //           </div>
        //          <div className="form">
        //          <div className="first-input">
        //             <p>Username</p>
        //             <input type="text" placeholder="Enter your email" className="username"/>
        //           </div>
        //           <div className="second-input">
        //             <p>Password</p>
        //             <input type="password" placeholder="Enter your password" className="password"/>
        //           </div>
        //          </div>
        //           <div className="login-button1">
        //             <button id="button1">Login</button>
        //           </div>
        //           <p className="link">
        //             <a className="loga" href="#">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
        //           </p>
        //           </div>
        //       </div>
        //     </div>
            
        //   </div>
         
        // </>

        <></>
      );
}

