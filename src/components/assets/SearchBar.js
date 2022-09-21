import React from "react";
import filter from '../images/filter.png'



function SearchBar({createProject , theme}){

    return(
        <div className="user-project-search">
            {/* <input className="search-bar" placeholder="SEARCH" />  */}
            <div className="search-button" onClick={()=>createProject()} style={{backgroundColor:theme.backgroundcolor , color: theme.color}} > <p>New Project</p>  </div>
          
        </div>
    )

}

export default SearchBar

