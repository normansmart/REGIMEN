import React, { useState , useEffect} from "react";
import "../css/explore.css"


function GroupCard({group , theme , userId , joined , groupAssign , fetchGroupData}) {

   
const isJoined =() =>{
   const button = document.getElementsByClassName("group-join-button-container")
  button.style.display="none"
}


  
    const collabNum = () =>{
        if(group.users == null){
            return "0"
        } else {
            return group.users.length
        }
    }

    const projectNum = () =>{
        if(group.projects == null){
            return "0"
        } else {
            return group.projects.length
        }
    }


    const commitNum = () =>{
        if(group.commits == null){
            return "0"
        } else {
            return group.commits.length
        }
    }

    // const commitNum = project.commits.length
    return (
        <div className="group-card" >

            <div style={{ marginLeft:"7%"}}> 
            <h1 style={{fontSize: "20px" , fontWeight: "900" , width:"100%"}} > {group.name} </h1>
            <p style={{fontSize: "17px" , fontWeight: "500", margin:"2px" , textIndent:"0px"}}> Members: {collabNum()}   </p>
            <p style={{fontSize: "17px" , fontWeight: "500",  margin:"2px" , textIndent:"0px"}}> Projects: {projectNum()} </p>
            <p style={{fontSize: "17px" , fontWeight: "500" ,  margin:"2px" , textIndent:"0px"}}> Total Declarations: {commitNum()} </p>
            </div>

            <div className="group-join-button-container" style={joined ? {display:"none"} : {display:"block"}} onClick={()=> { 
                groupAssign(group)
                fetchGroupData()} } >
                <button className="group-join-button" style={{
                fontSize: "35px" , 
                border: "none" , 
                backgroundColor:theme.color , 
                color: theme.backgroundcolor , 
                cursor:"pointer" ,
                } } > + </button>
                <h3 style={{marginTop:"5px"}} > JOIN </h3>
            </div>

        </div>
    )
}


export default GroupCard