import React from "react";
import { useState } from "react";

const Settings = ({userid , themeSelect , currentTheme}) =>{

    const themeName = (currentTheme)=>{

        if(currentTheme.font == "Mulish"){
            return "REGIMEN"
        }else if(currentTheme.font == "Aboreto"){
            return "HANAFUDA"
        }else if(currentTheme.font == "Raleway"){
            return "SKY TALE"
        }else if(currentTheme.font == "Silkscreen"){
            return "8-BIT"
        }else if(currentTheme.font == "Lato"){
            return "SPRING"
        }else if(currentTheme.font == "Noto Sans"){
            return "GREYSCALE"
        }else if(currentTheme.font == "Barlow Condensed"){
            return "KUSHMA"
        }else if(currentTheme.font == "Montserrat"){
            return "SOVREIGN"
        }
    }

   const themesLight = [
    {
        user_id:userid,
        backgroundcolor: "#FFF9F2" , 
        font: "Mulish" ,
        color: "#38383A"

    },

    {
        user_id:userid,
        backgroundcolor: "#F5FAFF" , 
        font: "Raleway" ,
        color: "#0C2A3A"

    },
    {
        user_id:userid,
        backgroundcolor: "#F6FFF2" , 
        font: "Lato" ,
        color: "#2E3013"

    },
    {
        user_id:userid,
        backgroundcolor: "#F5F5F5" , 
        font: "Noto Sans" ,
        color: "#333333"

    }

   ]


const themesDark = [
    {
        user_id:userid,
        backgroundcolor: "#412525" , 
        font: "Aboreto" ,
        color: "#FFFBF6"

    },

    {
        user_id:userid,
        backgroundcolor: "#142215" , 
        font: "Barlow Condensed" ,
        color: "#F5FFF8"

    },
    {
        user_id:userid,
        backgroundcolor: "#222532" , 
        font: "Silkscreen" ,
        color: "#F8F8FF"

    },
    {
        user_id:userid,
        backgroundcolor: "#201422" , 
        font: "Montserrat" ,
        color: "#F8F1E6"

    }
]

   const themeOptionsLight = themesLight.map(
    item =>{
        return(<>
            <div className="setting-background" style={{backgroundColor:item.backgroundcolor}} onClick={()=>themeSelect(item)}> 
              
                <div className="setting-color" style={{backgroundColor:item.color}} onClick={()=>themeSelect(item)}>

                </div>

            </div>
            </>
        )
    }
   )

   const themeOptionsDark = themesDark.map(
    item =>{
        return(
            <div className="setting-background" style={{backgroundColor:item.backgroundcolor}} onClick={()=>themeSelect(item)}> 

                <div className="setting-color" style={{backgroundColor:item.color}} onClick={()=>themeSelect(item)}>

                </div>

            </div>
            
        )
    }
   )




    return(
<div style={{marginTop:"120px"}} >
    <h1 style={{paddingTop:"20px"}}> Choose Your Theme </h1>
    <h1 className="theme-name"> {themeName(currentTheme)} </h1>

        <div className="theme-container"> 
        <h3> Light Themes</h3><br/>
        {themeOptionsLight}
        </div>
   
        <div className="theme-container">
        <h3> Dark Themes</h3><br/>
        {themeOptionsDark}
        </div>

</div>
    )
}

export default Settings