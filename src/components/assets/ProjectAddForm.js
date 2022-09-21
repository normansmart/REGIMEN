import React from "react";


function ProjectAddForm({post , switcher , groups}){
   
    const groupOptions = groups.map(
        item => {
            return (
                <option key={item.id} > {item.name} </option>
            )
        }
    )

    return(
        <form onSubmit={(e) => post(e)} className="project-form">
        <h2 > Create a project</h2>
        <select name="group" style={{ width: "40%" }} > 

            {groupOptions}
        </select><br/>
        <input type="text" name="name" placeholder="Project Name" id="project-add-name" />
        <input type="text" name="key" placeholder="Key" id="project-add-key" /><br/>
        <textarea type="text" name="description" placeholder="Description" id="project-add-description" /><br/>

        <input type="text" name="front_lang" placeholder="Frontend Language" id="project-add-lang" />
        <input type="text" name="back_lang" placeholder="Backend language" id="project-add-lang" /><br/>


        <select name="private" style={{ width: "15%" , textAlign:"center" , fontSize:"16px"}}>
            <option value={true}> Private </option>
            <option value={false}> Public  </option>
        </select> <br/> 

        <button type="submit" id="project-add-button" onClick={()=>switcher()}> Submit</button>
    </form>
    )
}

export default ProjectAddForm