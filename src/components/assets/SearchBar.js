import React from "react";
import filter from '../images/filter.png'



function SearchBar({createProject , createGroup , theme}){

    return(
        <div className="user-project-search">
            {/* <input className="search-bar" placeholder="SEARCH" />  */}
            <button className="search-button" title="New Project" onClick={()=>createProject()} style={{backgroundColor:theme.backgroundcolor , color: theme.color, borderColor: theme.color}} onMouseEnter={ {backgroundColor: theme.color} } > New Project </button>
            <button className="search-button" title="New Project" onClick={()=>createGroup()} style={{backgroundColor:theme.backgroundcolor , color: theme.color, borderColor: theme.color}} onMouseEnter={ {backgroundColor: theme.color} } > New Group </button>
        </div>
    )

}

export default SearchBar

