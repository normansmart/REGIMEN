import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({projects , sideSelect}) {

    const myProjectList = projects.map(
        item => {
            return(
                <ProjectCard key={item.id} project={item} sideSelect={sideSelect} />
            )
        }
    )

    return(
        <>
        {myProjectList}
        </>
    )
}

export default ProjectList