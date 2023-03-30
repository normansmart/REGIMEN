import React from "react";
import { useState } from "react";

const Settings = ({ userid, themeSelect, currentTheme, user }) => {

const attachment = () => {
    if (user){
       return user.attachment_url
    } else{
       return "https://i.pinimg.com/originals/da/f9/50/daf9502cfb28e867036a06ac3826dce8.jpg"
    }
}

    const themeName = (currentTheme) => {

        if (currentTheme.font == "Mulish") {
            return "REGIMEN"
        } else if (currentTheme.font == "Aboreto") {
            return "HANAFUDA"
        } else if (currentTheme.font == "Raleway") {
            return "SKY TALE"
        } else if (currentTheme.font == "Silkscreen") {
            return "8-BIT"
        } else if (currentTheme.font == "Lato") {
            return "SPRING"
        } else if (currentTheme.font == "Noto Sans") {
            return "GREYSCALE"
        } else if (currentTheme.font == "Barlow Condensed") {
            return "KUSHMA"
        } else if (currentTheme.font == "Montserrat") {
            return "SOVREIGN"
        }
    }

    const themesLight = [
        {
            user_id: userid,
            backgroundcolor: "#FFF9F2",
            font: "Mulish",
            color: "#38383A"

        },

        {
            user_id: userid,
            backgroundcolor: "#F5FAFF",
            font: "Raleway",
            color: "#0C2A3A"

        },
        {
            user_id: userid,
            backgroundcolor: "#F6FFF2",
            font: "Lato",
            color: "#2E3013"

        },
        {
            user_id: userid,
            backgroundcolor: "#F5F5F5",
            font: "Noto Sans",
            color: "#333333"

        }

    ]


    const themesDark = [
        {
            user_id: userid,
            backgroundcolor: "#412525",
            font: "Aboreto",
            color: "#FFFBF6"

        },

        {
            user_id: userid,
            backgroundcolor: "#142215",
            font: "Barlow Condensed",
            color: "#F5FFF8"

        },
        {
            user_id: userid,
            backgroundcolor: "#222532",
            font: "Silkscreen",
            color: "#F8F8FF"

        },
        {
            user_id: userid,
            backgroundcolor: "#201422",
            font: "Montserrat",
            color: "#F8F1E6"

        }
    ]

    const themeOptionsLight = themesLight.map(
        item => {
            return (<>
                <div className="setting-background" style={{ backgroundColor: item.backgroundcolor }} onClick={() => themeSelect(item)}>

                    <div className="setting-color" style={{ backgroundColor: item.color }} onClick={() => themeSelect(item)}>

                    </div>

                </div>
            </>
            )
        }
    )

    const themeOptionsDark = themesDark.map(
        item => {
            return (
                <div className="setting-background" style={{ backgroundColor: item.backgroundcolor }} onClick={() => themeSelect(item)}>

                    <div className="setting-color" style={{ backgroundColor: item.color }} onClick={() => themeSelect(item)}>

                    </div>

                </div>

            )
        }
    )



    function imageSelect(e) {
      
        e.preventDefault();
      

       var picture = e.target.image.files[0]
       var src = URL.createObjectURL(picture)
       submitToApi(src);
    }

    function submitToApi(data){
        console.log(data)
        fetch(`/users/${userid}`, {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              "Content-Type": "application/json"
            },
            body: JSON.stringify(
              {
                username: user.username,
                password_digest: user.password,
                first_name: user.first_name,
                last_name: user.last_name,
                onboarded: true , 
                attachment_url: data
               
              }
            )
          }
          ).then(r => r.json())
            .then(t => {
    
              console.log(t)
            }).catch((error) => console.error(error))
    }


    // multiple accept="image/*" 

    return (
        
        <div style={{ marginTop: "120px" }} >
               <div>
                <img src={attachment()} />
            </div>
            <h1 style={{ paddingTop: "20px" }}> Choose Your Theme </h1>
            <h1 className="theme-name"> {themeName(currentTheme)} </h1>

            <div className="theme-container">
                <h3> Light Themes</h3><br />
                {themeOptionsLight}
            </div>

            <div className="theme-container">
                <h3> Dark Themes</h3><br />
                {themeOptionsDark}
            </div>

         

            <form onSubmit={(e)=> imageSelect(e)}>
                <h1> chooose image here</h1>
                <input type="text" name="title" />
                <input type="file" name="image" />
                <button type="submit" name="submit"> SUBMIT</button>
            </form>
        </div>
    )
}

export default Settings