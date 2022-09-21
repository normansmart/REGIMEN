import React from "react";



function GroupAddForm({onboardGroup}){




    return(
        
        <form onSubmit={(e)=> onboardGroup(e)}>
            <h1> Start a group </h1>
           <input className="group-form-input" type="text" name="name" placeholder="Cohort Name" /><br/>
           <input className="group-form-input" type="text" name="tag" placeholder="TAG" /> <br/>
           <input className="group-form-input" type="text" name="message" placeholder="Tagline" /><br/>
           <input className="group-form-input" type="text" name="join_key" placeholder="join_key" /><br/>

           

           <button type="submit" id="project-add-button"> Start </button>

        </form>
    )
}export default GroupAddForm