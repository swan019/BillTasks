import React from 'react'
import { MdNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='NavSearchPart'>
                <input type="text" placeholder='Search Here' />
                <div className='ProfileSec'>
                    <MdNotificationsActive />   
                </div>

            </div>
            <div className='ProfileSec'>
                <CgProfile />
            </div>


        </div>
    )
}

export default Navbar