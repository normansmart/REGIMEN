import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import CommitCard from "./CommitCard"
import CommitField from "./CommitAdder"

import { Link } from "react-router-dom";
import "../css/sidebar.css"

function SideBar({ selectedProject, toggle, switcher, commits , deleter , editer , currentLang , theme}) {


   
const users = () => {
    if(selectedProject.users == null) {
        console.log("Null now")
    }else{
        return selectedProject.users.length
    }
}
 
const allUsers = selectedProject.users
    const group = selectedProject.group
   


    const commitCards = commits.map(
        item =>{
            return( 
                <CommitCard key={item.id} commit={item} deleter={deleter} userAll={allUsers} editer={editer} lang={currentLang} />
            )
        }
    )


 


    return (
        <div className="side-bar-container" id={toggle ? "toggle-on" : "toggle-off"} >
  

            <div className="side-bar"  style={ toggle ? {left: "0px" , backgroundColor: theme.backgroundcolor}  : {left: "-550px"} }  >

                <h1> {selectedProject.name} </h1>
                <h2>{group ? group.name : ""} </h2>
                <p> {selectedProject.description} </p>

                <div className="project-specs"> 

                <div className="project-lang">
                    <h3>  {selectedProject.front_lang} </h3>
                    <h4> Frontend</h4>
                </div>

                <div className="project-lang">
                    <h3>  {selectedProject.back_lang} </h3>
                    <h4> Backend</h4>
                </div>

                <div className="project-lang">
                    <h3>  {users()} </h3>
                    <h4> Collaborators</h4>
                </div>

                </div>


                <Link to='/declaration'>     <button id="new-commit"> Add New Commit </button> </Link>

                <div className="">
                    <h3> Declarations </h3>
                    <h3> Collaborators </h3>
                </div>


                <div className="commit-card-container">

              {commitCards}

                </div>
            
            </div>


            <div className="side-bar-cover" onClick={()=> switcher()} >


              





            </div>

        </div>
    )
}

export default SideBar