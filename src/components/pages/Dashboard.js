import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../assets/SearchBar";
import ProjectList from "../assets/ProjectList";
import SideBar from "../assets/SideBar";
import ProjectCreate from "../assets/ProjectAdder";
import GroupCreate from "../assets/GroupAdder";
import "../css/dashboard.css"


const Dashboard = ({
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
    newGroup,
    groupAdder,
    groupSwitch,
    groupToggle,

}) => {

    const [allUsers, setAllUsers] = useState([])



    useEffect(() => {
        fetch("/users")
            .then(r => r.json())
            .then(item => {
                setAllUsers(item)
                console.log("Here we go")
            })
    }, [])




    return (
        <div className="dashboard-container">

            <div className="search-container">
                <SearchBar createProject={newProject} createGroup={newGroup} theme={theme} />
            </div>


            <div className="project-tab-container">
                <ProjectList projects={projects} sideSelect={sideSelect} />
                <ProjectCreate groups={groups} post={post} switcher={newProject} toggle={newPShowToggle} groupSelect={groupSelect} setGroupSelect={setGroupSelect} />
                <GroupCreate groupAdder={groupAdder} switcher={groupSwitch} toggle={groupToggle} />
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

export default Dashboard
