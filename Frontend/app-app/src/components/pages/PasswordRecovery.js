import React, { useEffect, useState } from "react";
import Axios from'axios';
import Navbar from '../Navbar';
import './PasswordRecovery.css';

function PasswordRecovery() {
    const url =""
    const [data, setData] = useState({
        email: ""
    })    

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            email: data.email
        })
            .then(res => {
                console.log(res.data)
            })
    }


    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }


    return (
        <>
        <Navbar/>
        <body>
            <div class="container">
                <form onSubmit={(e) => submit(e)}>
                    <h1 >Did you loose something?</h1>
                    <h3>Enter your email below and we will send you your password.</h3>
                    <label>Email:</label>
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="text" required></input>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        </body>
        </>
    )
}

export default PasswordRecovery
