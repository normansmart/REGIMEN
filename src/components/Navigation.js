import React from "react";
import { Link } from "react-router-dom";
import './css/navigation.css'



const Navigation = ({ currentUserId, logout, style }) => {

  let image = require('./images/poweroff.png')
  function LogoutButton({ currentUserId, logout }) {
    if (currentUserId) {
      return <button className="logout-button" onClick={()=>logout()}> <img src={image} /> </button>
    }
    else {
      return <></>
    }
  }


  return (
    <nav>
      <ul >
        <Link className="link" style={{ color: style.color }} to='/'> <li> Dashboard</li> </Link>
        <Link className="link" style={{ color: style.color }} to='/declaration'> <li> Workstation</li></Link>
        <Link className="link" style={{ color: style.color }} to='/explore'>   <li> Explore </li> </Link>
        <Link className="link" style={{ color: style.color }} to='/settings'> <li> Settings </li> </Link>
        <LogoutButton currentUserId={currentUserId} logout={logout} />
      </ul>
    </nav>
  )
}


export default Navigation 