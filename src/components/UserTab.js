import React from "react";
import './css/usertab.css'

const UserTab = ({ user, myprojects, mycohorts, mycommits, mycolleagues , width , h2Size}) => {


    const projectNum = myprojects.length
    const cohortNum = mycohorts.length
    const commitNum = mycommits.length
    const colleagueNum = mycolleagues.length

    const projectTitle = (projectNum) => {
        if (projectNum === 0 || projectNum > 1) {
            return "Projects"
        } else if (projectNum === 1) {
            return "Project"
        }
    }

    const cohortTitle = (cohortNum) => {
        if (cohortNum === 0 || cohortNum > 1) {
            return "Cohorts"
        } else if (cohortNum === 1) {
            return "Cohort"
        }
    }



    const commitTitle = (commitNum) => {
        if (commitNum === 0 || commitNum > 1) {
            return "Declared"
        } else if (commitNum === 1) {
            return "Declared"
        }
    }

    const colleagueTitle = (colleagueNum) => {
        if (colleagueNum === 0 || colleagueNum > 1) {
            return "Partners"
        } else if (colleagueNum === 1) {
            return "Partner"
        }
    }

    let image = require('./images/logo.png')

    return (
        <div className="user-tab" style={{width: width}}>

            <div className="user-info-container" >

                {/* <div className="nav-logo">
                <img src={image} />
                </div> */}

                <h1 style={{fontSize: h2Size}}> {user.username} </h1>

                
                <div className="user-icon">
                    <h2 style={{boxShadow:""}} > {projectNum} </h2>
                    <p> {projectTitle(projectNum)} </p>
                </div>

                <div className="user-icon">
                    <h2> {cohortNum} </h2>
                    <p> {cohortTitle(cohortNum)} </p>
                </div>

                <div className="user-icon">
                    <h2> {commitNum} </h2>
                    <p> {commitTitle(commitNum)} </p>
                </div>

                <div className="user-icon">
                    <h2> {colleagueNum} </h2>
                    <p> {colleagueTitle(colleagueNum)} </p>
                </div>

            </div>

        </div>
    )
}

export default UserTab