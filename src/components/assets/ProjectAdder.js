import React from "react";
import ProjectAddForm from "./ProjectAddForm";

function ProjectCreate({ groups, post , toggle , switcher }) {

    return (

        <div className="project-add-container" id={toggle ? "toggle-on" : "toggle-off"} >

            <ProjectAddForm post={post} switcher={switcher} groups={groups} />
           

            <div className="project-add-cover" onClick={()=>switcher()}> </div>
        </div>
    )
}

export default ProjectCreate