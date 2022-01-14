import React, { useState } from "react";
import axios from'axios';
import FirstNavbar from '../../../FirstNavbar';
import { Link } from 'react-router-dom';
import './PasswordRecovery.css';
import swal from 'sweetalert';

function PasswordRecovery() {
    const [email, setEmail] = useState('');

    function fetchEmail(){
        axios.post(`http://localhost:9090/api/v1/email/email-sent/${email}`)
            .then(response =>{
                swal({
                    title: "Success!",
                    text: "Checke you email! ",
                    icon: "success",
                });
             const userList = response.data;
             console.log.apply(userList)
             
           })
           .catch(err => {
               console.log("Error occured", err);
           })
     }
    // useEffect(()=>{
    //     fetchEmail();
    // }, [] );

    // function submit(e) {
    //     e.preventDefault();
    //     axios.post(url, {
    //         email: email.email
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //         })
    // }


    // function handle(e){
    //     const newdata={...email}
    //     newdata[e.target.id] = e.target.value
    //     setEmail(newdata)
    //     console.log(newdata)
    // }


    return (
        <>
        <FirstNavbar/>
         <div class="fullpage">
            <div class="container">
                <form >
                    <h2 id="h2">Did you lose something?</h2>
                    <br/>
                    <h2 id="h2">Enter your email below and we will send you your password.</h2>
                    <br/>
                    <label id="h2">Email:</label>
                    <input onChange={e => setEmail(e.target.value)} id="email"  placeholder="email" type="text" ></input>
                    <br/>
                    <br/>
                    <Link to="/" className='btn-mobile'>
                    <button class="button" id="h2" onClick={fetchEmail}>Submit</button>
                    </Link>
                    
                </form>
            </div>
        </div>
        </>
    )
}

export default PasswordRecovery