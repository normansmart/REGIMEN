import React from "react";
import { useState, useEffect } from "react";
import ProjectList from "../assets/ProjectList";
import GroupList from "../assets/GroupList";
import SideBar from "../assets/SideBar";
import UserList from "../assets/UserList";
import "../css/explore.css"

const ExplorePage = ({
    projects,
    sideSelect,
    selectedProject,
    sideBarToggle,
    switcher,
    commits,
    declare,
    editer,
    deleter,
    groups,
    post,
    currentLang,
    newProject,
    newPShowToggle,
    theme,
    groupSelect,
    setGroupSelect,
    userId,
    user,
    groupAssign,
myFriends }) => {

    const [allProjects, setAllProjects] = useState([])
    const [allCohorts, setAllCohorts] = useState([])
    const [allUsers, setAllUsers] = useState([])

    const [showProjects, setShowProjects] = useState(true)
    const [showGroups, setShowGroups] = useState(false)
    const [showUsers, setShowUsers] = useState(false)
    const width = "100%"
    const userTab = "20px"
    console.log(showProjects)
    console.log(showGroups)
    console.log(showUsers)
    useEffect(() => {
        fetchProjectData()
        fetchGroupData()
        fetchUserData()
    }, [])

    console.log(allProjects)
    function fetchProjectData() {
        fetch("/projects")
            .then(r => r.json())
            .then(item => {
                console.log(item)
                setAllProjects(item)
            })
    }

    function fetchGroupData() {
        fetch("/cohorts")
            .then(r => r.json())
            .then(item => {
                console.log(item)
                setAllCohorts(item)
            })
    }
    console.log(allCohorts)

    function fetchUserData() {
        fetch("/users")
            .then(r => r.json())
            .then(item => {
                console.log(item)
                setAllUsers(item)
            })
    }

    function showPage(page) {
        if (page === "projects") {
            setShowProjects(true)
            setShowGroups(false)
            setShowUsers(false)
            console.log(showProjects)
            console.log(showGroups)
            console.log(showUsers)
        } else if (page === "groups") {

            setShowProjects(false)
            setShowGroups(true)
            setShowUsers(false)
            console.log(showProjects)
            console.log(showGroups)
            console.log(showUsers)
        } else if (page === "users") {
            setShowProjects(false)
            setShowGroups(false)
            setShowUsers(true)
            console.log(showProjects)
            console.log(showGroups)
            console.log(showUsers)
        }

    }


    function assignFriends(otherUser) {
        fetch("/friends", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    user_id: userId,
                    friend_id: otherUser.id
                }
            )
        })
     
handleUserUpdate(otherUser)
    }

    function handleUserUpdate(user){
        const updatedItems = allUsers.filter((item) => item.id !== user.id);
        console.log(updatedItems)
        setAllUsers(updatedItems);
    }


    return (
        <div className="explore-container">
            <div className="explore-nav" style={{ backgroundColor: `${theme.backgroundcolor}CC`, borderBottom: `1px solid ${theme.color}66 ` }}>
                <ul>
                    <li onClick={() => showPage("projects")} style={showProjects ? { backgroundColor: theme.color, color: theme.backgroundcolor } : { backgroundColor: theme.backgroundcolor, color: theme.color }} > Projects</li>
                    <li onClick={() => showPage("groups")} style={showGroups ? { backgroundColor: theme.color, color: theme.backgroundcolor } : { backgroundColor: theme.backgroundcolor, color: theme.color }}> Groups</li>
                    <li onClick={() => showPage("users")} style={showUsers ? { backgroundColor: theme.color, color: theme.backgroundcolor } : { backgroundColor: theme.backgroundcolor, color: theme.color }}> Users</li>
                </ul>
            </div>

            <div className="project-tab-container" style={showProjects ? { display: "flex", paddingTop: "80px" } : { display: "none", paddingTop: "80px" }}>
                <ProjectList projects={allProjects} sideSelect={sideSelect} />
            </div>

            <div className="group-tab-container" style={showGroups ? { display: "inline-block" } : { display: "none" }}>
                <GroupList groups={allCohorts} theme={theme} userId={userId} user={user}  />
            </div>

            <div className="user-tab-container" style={showUsers ? { display: "flex" } : { display: "none" }}>
                <UserList users={allUsers} user={user} width={width} theme={theme} h2Size={userTab} addFriend={assignFriends}  myFriends={myFriends}  />
            </div>

            <SideBar
                selectedProject={selectedProject}
                toggle={sideBarToggle}
                switcher={switcher}
                commits={commits}
                declare={declare}
                deleter={deleter}
                editer={editer}
                currentLang={currentLang}
                theme={theme}
                userId={userId}
            />

        </div>
    )
}

export default ExplorePage