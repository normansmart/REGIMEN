import React from "react";


function ProjectCard({ project , sideSelect}) {


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

            <h2 > {project.cohort.name} </h2>
            <p> Cohorts: {collabNum()} </p>
            <p> Inclusions: {commitNum()} </p>
           
            <h1> {project.name} </h1>
        </div>
    )
}

export default ProjectCard