import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'

export const CurryIng = ()=> {

   

    const [toastIng, setToastIng] = useState([]);

    const fetchCurryIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/breakfast/avocado-toast").then(res =>{
            console.log(res);
            setToastIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchToastIng();
    }, [] );

    return toastIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}