import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const ToastIng = ()=> {

   

    const [toastIng, setToastIng] = useState([]);

    const fetchToastIng = ()=>{
        var recipe = "toast";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setToastIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchToastIng();
    }, [] );

    return(
   
       <>
     <div key={toastIng.ingID}>
               <h3>Ingredient: {toastIng.ingName}</h3>
               
     </div>
     </>  
   
    )
}