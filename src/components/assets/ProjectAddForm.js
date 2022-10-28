import React from "react";
import { useState, useEffect } from "react";

// Function to add new projects to backend. Takes the createNewProject function, display switcher and groups array as parameters.
function ProjectAddForm({ post, switcher, groups , groupSelect , setGroupSelect}) {


//useState for chosen group id
 

//on page load, console log. if user logs in, sets state to first group id
    // useEffect( () => {
    //     if(groups[0]){
    //         const firstGroup = groups[0].id
    //         setGroupSelect(firstGroup)
    //         console.log(groupSelect)
    //     }
    //     else{
    //         console.log("no group chosen")
    //     }
       
    // } , [])

    console.log(groupSelect)

    //runs a fetch(get) to cohorts and filters array to give group that matches user selection and sets state to group id
    function groupselector(e) {

        fetch("/cohorts")
            .then(r => r.json())
            .then(cohorts => {
                const choice =  cohorts.filter( item => item.name == e.target.value)
                console.log(choice)
                const groupId = choice[0].id
                setGroupSelect(groupId)

            })
    }
  
    //maps across user cohorts and creates an option tag for each group the user is a member of
    const groupOptions = groups.map(
        item => {
            return (
                <option key={item.id} > {item.name} </option>
            )
        }
    )

    return (
        // on submit trigger createNewProject function in App.js. Event parameters: Group name, project name, project key, description, languages and privacy
        <form onSubmit={(e) => post(e, groupSelect)} className="project-form">
            <h2 > Create a project</h2> 
            <select name="group" style={{ width: "40%" }} onChange={(e)=>groupselector(e)} >
                {groupOptions}
            </select><br />
            <input type="text" name="name" placeholder="Project Name" id="project-add-name" />
            <input type="text" name="key" placeholder="Key" id="project-add-key" /><br />
            <textarea type="text" name="description" placeholder="Description" id="project-add-description" /><br />

            <input type="text" name="front_lang" placeholder="Frontend Language" id="project-add-lang" />
            <input type="text" name="back_lang" placeholder="Backend language" id="project-add-lang" /><br />


            <select name="private" style={{ width: "15%", textAlign: "center", fontSize: "16px" }}>
                <option value={true}> Private </option>
                <option value={false}> Public  </option>
            </select> <br />

            <button type="submit" id="project-add-button" onClick={() => switcher()}> Submit</button>
        </form>
    )
}

export default ProjectAddForm