import React, { useState , useEffect} from "react";
import "../css/explore.css"
import UserTab from "../UserTab";



function UserCard({user , theme , userId , width , h2Size , addFriend}) {
return(
    <div className="user-card"> 
    
          <div className="add-friend-button-container">
                <button className="add-friend-button" style={{
                backgroundColor:theme.color , 
                color: theme.backgroundcolor , 
                }}  onClick={()=>addFriend(user)}> Follow </button>
            </div>

    <UserTab user={user} myprojects={user.projects} mycohorts={user.cohorts} mycommits={user.commits} mycolleagues={user.friends} width={width} h2Size={h2Size} />
    </div>

)
}

export default UserCard