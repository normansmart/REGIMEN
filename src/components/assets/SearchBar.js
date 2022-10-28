import React from "react";
import filter from '../images/filter.png'



function SearchBar({createProject , theme}){

    return(
        <div className="user-project-search">
            <input className="search-bar" placeholder="SEARCH" /> 
            <div className="search-button" title="New Project" onClick={()=>createProject()} style={{backgroundColor:theme.backgroundcolor , color: theme.color, borderColor: theme.color}} onMouseEnter={ {backgroundColor: theme.color} } > <h1> + </h1>  </div>

        </div>
    )

}

export default SearchBar

