import reactSyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { Link } from "react-router-dom";


function CommitCard({ commit, deleter, userAll ,editer , lang}) {

    let deleteIcon = require('../images/buttons/delete.png')
    let editIcon = require('../images/buttons/edit.png')

    console.log(userAll)
    console.log(commit)

    const userName = userAll.filter(item => {
        return item.id == commit.user_id
    })

    console.log(userName)

    return (

        <div className="syntax-card">
            <div style={{ display: "flex" }} >
                <h4>{userName[0].username} </h4>
                <h3> {commit.title}</h3>
            </div>

            <div className="commit-display">
                <SyntaxHighlighter language={commit.language} style={a11yDark} className="highlighter" >

                    {commit.commit}

                </SyntaxHighlighter>

            </div>

            <div className="commit-button-container" >

                <button className="commit-button" onClick={() => deleter(commit)} id="delete" > <div className="commit-icon" >  <img src={deleteIcon} /> </div> </button>

                <Link className="link" to='/commitedit'>    <button className="commit-button" onClick={()=> editer(commit)} id="edit" > <div className="commit-icon" >  <img src={editIcon} /> </div></button> </Link>
            </div>

            <p> {commit.updated_at} </p>

        </div>



    )
}

export default CommitCard
