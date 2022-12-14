import React, { useEffect, useState } from "react";
import axios from'axios';
import { Link } from 'react-router-dom';
import FirstNavbar from '../../../FirstNavbar';
import './SignUpEmailSent.css';
import swal from 'sweetalert';


function SignUpEmailSent() {
    const [email, setEmail] = useState({
        email: ""
    })    
    const userEmail = sessionStorage.getItem('email');
    const fetchEmail = ()=>{
        const newEmail = sessionStorage.getItem('newEmail')
        axios.post(`http://localhost:9090/api/v1/email/signup-email-sent/${newEmail}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
        swal({
            title: "Success!",
            text: "Checke you email! ",
            icon: "success",
        });
            console.log(res);
            setEmail(res.data);
        });
        

    }

    // useEffect(()=>{
    //     fetchEmail();
    // }, [] );

    // function home(e) {
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
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div class="container">
                <form >
                    <h2 id="h2">We are glad you Signed Up!</h2>
                    <br/>
                    <h2 id="h2">Check your email to view our greeting!</h2>
                    <br/>
                    {/* <button class="button" id="h2" onClick={fetchEmail}>Home</button> */}
                    <Link to="/" className='btn-mobile'>
                    <button class="button" id="h2" onClick={fetchEmail}>Home</button>
                    </Link>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignUpEmailSent
