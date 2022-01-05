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
            <div>
                <form onSubmit={(e) => submit(e)}>
                    <label>Email:</label>
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="text" required></input>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default PasswordRecovery
