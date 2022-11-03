import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserList({ users, theme, userId, user, groupAssign, fetchGroupData , width , h2Size }) {



    const userList = users.map(

        item => {

            if(( item.id === user.id)) {
              
              console.log("that's ma")

            }
            else {
                return (
                    <>
                    <UserCard user={item} width={width} theme={theme} h2Size={h2Size}/>
                    </>
                )

            }
        }
    )


    // const generalfriendList = groups.map(
    //     item => {

    //         const userFilter = item.users
    //         if (userFilter.some(item => item.id === user.id)) {
    //             console.log("Don't include")
    //         }
    //         else {
    //             console.log("works")
    //             return (
    //                 <>
    //                     <GroupCard key={item.id} group={item} theme={theme} userId={userId} joined={false} groupAssign={groupAssign} fetchGroupData={fetchGroupData} />
    //                 </>
    //             )
    //         }
    //     }
    // )


    return (
        <>
            {/* <div className="my-groups">
                <h2> My Cohorts</h2>
             
            </div> */}

           
            {userList}
            
        </>
    )
}

export default UserList