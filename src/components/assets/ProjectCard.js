import React from "react";


function ProjectCard({ project , sideSelect}) {

    console.log(project)
    const collabNum = () =>{
        if(project.users == null){
            return "0"
        } else {
            return project.users.length
        }
    }


    const commitNum = () =>{
        if(project.commits == null){
            return "0"
        } else {
            return project.commits.length
        }
    }

    // const commitNum = project.commits.length
   
    
    return (
        <div className="project-card" onClick={()=> sideSelect(project)} >
            <div style={{width:"100%" , height:"100%"}}>
            {/* <h2 > {project.cohort.name} </h2> */}
            <p> Contributors: {collabNum()} </p>
            <p> Declarations: {commitNum()} </p>
           
            <h1> {project.name} </h1>
            </div>
        </div>
    )
}

export default ProjectCard