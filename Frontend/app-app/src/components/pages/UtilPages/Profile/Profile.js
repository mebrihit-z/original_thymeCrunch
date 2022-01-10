import React from 'react';
import Navbar from '../../../Navbar';
import '../../../../App.css';
import {ProfileConst} from './ProfileApi';
import './UserProfiles.css'


function Profile() {
    return (
        <>
        <Navbar/>

        <ProfileConst/>
        </>
    )
}

export default Profile