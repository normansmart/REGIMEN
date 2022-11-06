import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserList({ users, theme, userId, width, h2Size, addFriend, myFriends }) {

    console.log(myFriends)

    const userList = users.map(

        item => {

            if ((item.id === userId)) {

                console.log("that's me")

            }
            else if (myFriends.some(friend => friend.id == item.id)) {
                console.log("no friends here")

            } else {
               
                return (
                    <>
                        <UserCard user={item} width={width} theme={theme} h2Size={h2Size} addFriend={addFriend} />
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