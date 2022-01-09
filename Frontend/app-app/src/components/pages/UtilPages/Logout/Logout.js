import React from 'react';
import Navbar from '../../../Navbar';
import { Button } from '../../../buttons/Button';
import './Logout.css';
import '../../../../App.css';
import LogoutVideo from '../../../videos/LogoutVideo';
function Logout() {


    return (
       <>
       <Navbar/>

       <LogoutVideo/>
       <Button/>
       </>
    )
}

export default Logout
