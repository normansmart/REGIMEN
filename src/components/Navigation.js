import React from "react";
import { Link } from "react-router-dom";
import './css/navigation.css'

const Navigation = ({currentUserId, logout}) => {

    function LogoutButton({ currentUserId, logout }) {
        if (currentUserId) {
          return <li className="logout-button" onClick={logout}>Logout</li>
        }
        else {
          return <></>
        }
      }


    return (
        <nav>
            <ul>
            <Link className="link" to='/'> <li> Dashboard</li> </Link>
                <Link className="link" to='/declaration'> <li> Work Space</li></Link>
                <li> Groups </li>
                <Link className="link" to='/settings'> <li> Settings </li> </Link>
                <LogoutButton className="logoutButton" currentUserId={currentUserId} logout={logout}/>
            </ul>
        </nav>
    )
}


export default Navigation 