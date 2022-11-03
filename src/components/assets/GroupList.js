import React, { useState, useEffect } from "react";
import GroupCard from "./GroupCards";

function GroupList({ groups, theme, userId, user, groupAssign, fetchGroupData }) {



    const myGroupList = groups.map(

        item => {

            const userFilter = item.users


            if (userFilter.some(item => item.id === user.id)) {
                console.log("Works")
                return (
                    <>
                        <GroupCard key={item.id} group={item} theme={theme} userId={userId} joined={true} />
                    </>
                )

            }
            else {
                console.log("Don't include")

            }
        }
    )


    const generalGroupList = groups.map(
        item => {

            const userFilter = item.users
            if (userFilter.some(item => item.id === user.id)) {
                console.log("Don't include")
            }
            else {
                console.log("works")
                return (
                    <>
                        <GroupCard key={item.id} group={item} theme={theme} userId={userId} joined={false} groupAssign={groupAssign} fetchGroupData={fetchGroupData} />
                    </>
                )
            }
        }
    )
    console.log(generalGroupList)
    console.log(myGroupList)
    return (
        <>
            <div className="my-groups">
                <h2> My Cohorts</h2>
                {myGroupList}
            </div>

            <div className="all-groups"> 
            {generalGroupList}
            </div>
        </>
    )
}

export default GroupList