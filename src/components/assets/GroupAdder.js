import React from "react";
import GroupAddForm from "./GroupAddForm";



function GroupCreate({groupAdder , switcher , toggle}){
    return(
        <div className="project-add-container" id={toggle ? "toggle-on" : "toggle-off"} >
            <GroupAddForm groupAdder={groupAdder}  />
            <div className="project-add-cover" onClick={()=>switcher()}> </div>
        </div>
    )
}

export default GroupCreate