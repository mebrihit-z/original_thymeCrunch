import React from 'react'
import './Login.css';

import '../../App.css';
import UserProfiles  from './UserProfiles';
import VideoSection from '../VideoSection';
import Cards from '../Cards'
import Navbar from '../Navbar';

export default function Login() {
    return(
        <>
          <Navbar/>
          <div className="main">
            <div className="sub-main">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    {/* {<img src={profile} alt="profile" className="profile"/>} */}
                    <img src="images/profile.jpg"alt="profile" className="profile"/>
                  </div>
                </div>
                <div>
                  <div>
                  <h1>Login Page</h1>
                  </div>
                 <div className="form">
                 <div className="first-input">
                    <p>Username</p>
                    <input type="text" placeholder="Enter your email" className="username"/>
                  </div>
                  <div className="second-input">
                    <p>Password</p>
                    <input type="password" placeholder="Enter your password" className="password"/>
                  </div>
                 </div>
                  <div className="login-button">
                    <button>Login</button>
                  </div>
                  <p className="link">
                    <a href="#">Forgot Password ?</a> Or <a href="/sign-up">Sign Up</a>
                  </p>
                  </div>
              </div>
            </div>
            
          </div>
         
        </>


      );
}

