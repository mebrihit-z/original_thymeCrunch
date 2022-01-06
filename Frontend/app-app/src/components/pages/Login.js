<<<<<<< HEAD
import './Login.css';
//import profile from './images/profile.jpg';
//import email from './images/email.jpg';
//import pass from './images/fa.PNG';
export default function Login(){
    return(
      <>
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  {/* <img src={profile} alt="profile" className="profile"/> */}
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
                  <a href="/passwordrecovery">Forgot Password </a> Or <a href="#">Sign Up</a>
                </p>
                </div>
            </div>
          </div>
        </div>
      </>
    );
}
=======
import React from 'react'
import './Login.css';

import '../../App.css';
import UserProfiles  from './UserProfiles';
import VideoSection from '../VideoSection';
import Cards from '../Cards'
import Navbar from '../Navbar';

import { useState, useEffect } from "react";
import axios from "axios";
import Recipes from './Recipes';
import { useNavigate} from 'react-router-dom';


export default function Login() {
     //const user_url = "http://localhost:9090/login/${a}/${b}"
   // const user_url = "http://localhost:9090/users/login/"
    const [uname, setUsername] = useState('');
    const [upassword, setPassword] = useState('');
    
    const [uData, setUData] = useState("")
    const navigate = useNavigate()


  function submit(){
     const a = uname
     const  b = upassword
    // axios.post(user_url+"login",{
      axios.post(`http://localhost:9090/users/login/${a}/${b}`)
    //   {
    //     // "username": uname,
    //     // "password": upassword
    // })
        .then(response =>{
          if(response.data ==="ok" ) { navigate("/recipes");}

        })
        .catch(err => {
            console.log("Error occured", err);
        })
        // });

  }
  // function home(){
  //   ReactDOM.render(
  //     <React.StrictMode>
  //       <Recipes/>
  //     </React.StrictMode>,
  //     document.getElementById('main')
  //   );
  // }

//  function submitted(data){
//     if(data=="ok"){
//       <Recipes/>
//     }else{
//       console.log("The value is nor correct")
//     }

//   }

  // useEffect(() => {
  //     axios.post(user_url).then(res => {
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


    // <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}></input><br/>
    //         <input type="password" placeholder="Password" onChange={e => setPswd(e.target.value)}></input><br/>
    //         <button id="loginSubmit" onClick={submit}>Submit</button><br/>

    return(
        <>
          <Navbar/>
          <div className="main1">
            <div className="sub-main1">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    {/* {<img src={profile} alt="profile" className="profile"/>} */}
                    <img src="images/profile.jpg"alt="profile" className="profile"/>
                  </div>
                </div>
                <div>
                  <div>
                  <h1 id="t1">Login Page</h1>
                  </div>
                 <div className="form">
                 <div className="first-input">
                    <p>Username</p>
                    <input id="loginput" type="text" placeholder="Enter your username" className="username" onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className="second-input">
                    <p>Password</p>
                    <input id="loginput" type="password" placeholder="Enter your password" className="password" onChange={e => setPassword(e.target.value)}/>
                  </div>
                 </div>
                  <div className="login-button1">
                    <button id="button1" onClick={submit}>Login</button>
                  </div>
                  <p className="link">
                    <a className="loga" href="#">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
                  </p>
                  </div>
              </div>
            </div>
            
          </div>
         
        </>
      );
}

>>>>>>> a2bfb5135a489547e946a83fb2d0601b49d9442c
