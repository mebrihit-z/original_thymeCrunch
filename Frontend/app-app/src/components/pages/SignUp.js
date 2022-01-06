import React from 'react'
import './SignUp.css';

import '../../App.css';
import UserProfiles  from './UserProfiles';
import VideoSection from '../VideoSection';
import Cards from '../Cards'
import Navbar from '../Navbar';

export default function SignUp() {
    return(
        <>
          <Navbar/>
          <div className="main2">
            <div className="sub-main2">
              <div>
                {/* <div className="imgs">
                  <div className="container-image">
                    <img src="images/profile.jpg"alt="profile" className="profile"/>
                  </div>
                </div> */}
                <div>
                  <div>
                  <h1 id="t2">Sign Up Page</h1>
                  </div>
                 <div className="form">
                 <div className="first-input">
                    <p>First Name</p>
                    <input id="signupinput" type="text" placeholder="Enter your first name" className="firstname"/>
                  </div>
                  <div className="second-input">
                    <p>Last Name</p>
                    <input id="signupinput" type="text" placeholder="Enter your last name" className="lastname"/>
                  </div>
                  <div className="third-input">
                    <p>Email</p>
                    <input id="signupinput" type="text" placeholder="Enter your email" className="email"/>
                  </div>
                  <div className="forth-input">
                    <p>Username</p>
                    <input id="signupinput" type="password" placeholder="Enter your username" className="username"/>
                  </div>
                  <div className="fith-input">
                    <p>Password</p>
                    <input id="signupinput" type="password" placeholder="Enter your last name" className="password"/>
                  </div>
                 </div>
                  <div className="login-button2">
                    <button id="button2">Sign Up</button>
                  </div>
                  </div>
              </div>
            </div>
            
          </div>
         
        </>


      );
}

