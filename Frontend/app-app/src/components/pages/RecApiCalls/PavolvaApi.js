import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';


export const PavlovaIng = ()=> {

   

    const [pavlovaIng, setPavlovaIng] = useState([]);

    const fetchPavlovaIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/dessert/pavlova").then(res =>{
            console.log(res);
            setPavlovaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPavlovaIng();
    }, [] );

    return pavlovang.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}