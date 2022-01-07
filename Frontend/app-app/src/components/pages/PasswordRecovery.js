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
         <div class="fullpage">
            <div class="container">
                <form onSubmit={(e) => submit(e)}>
                    <h2 id="h2">Did you lose something?</h2>
                    <br/>
                    <h3 id="h2">Enter your email below and we will send you your password.</h3>
                    <br/>
                    <label id="h2">Email:</label>
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="text" required></input>
                    <br/>
                    <br/>
                    <button class="button" id="h2">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default PasswordRecovery;
