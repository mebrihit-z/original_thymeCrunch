import React from 'react';
import FirstNavbar from '../../../FirstNavbar';
import { Button } from '../../../buttons/Button';
import './Logout.css';
import '../../../../App.css';
import LogoutVideo from '../../../videos/LogoutVideo';
function Logout() {
    // sessionStorage.setItem('name', newName);
    // sessionStorage.setItem('username', uname);
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('recipe');
    return (
       <>
       <FirstNavbar/>

       <LogoutVideo/>
       <Button/>
       </>
    )
}

export default Logout
