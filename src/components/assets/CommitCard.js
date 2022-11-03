import reactSyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React, { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { Link } from "react-router-dom";
import { useState } from "react";

function CommitCard({ commit, deleter, userAll, editer, lang, theme, userId }) {

    const [showEdit, setShowEdit] = useState(true)

    let deleteIcon = require('../images/buttons/delete.png')
    let editIcon = require('../images/buttons/edit.png')
    console.log(commit)


    const userName = userAll.filter(item => {
        return item.id == commit.user_id
    })

    const commitUserId = commit.user_id

    useEffect(() => {
    if (commitUserId == userId) {
        setShowEdit(true)
        console.log(showEdit)

    }
    else {
        setShowEdit(false)
        console.log(showEdit)
    }

    } , [])

    return (

        <div className="syntax-card" style={{ backgroundColor: theme.backgroundcolor, borderColor: theme.color }} >
            <div style={{ display: "flex", }} >
                <h4 style={{ borderColor: theme.color, backgroundColor: theme.color , color: theme.backgroundcolor }} >{userName[0].username} </h4>
                <h3> {commit.title}</h3>
            </div>

            <div className="commit-display" onClick={() => editer(commit)} >
                <Link className="link" to='/commitedit' style={{ color: theme.color }} >
                    <SyntaxHighlighter language={commit.language} style={a11yDark} className="highlighter">
                        {commit.commit}
                    </SyntaxHighlighter>
                </Link>
            </div>

            <div className="commit-button-container" style={showEdit ? { visibility: "visible", borderColor: theme.color } : { visibility: "hidden", borderColor: theme.color }}>
                <button title="Delete" className="commit-button" onClick={() => deleter(commit)} id="delete" style={{ borderColor: theme.color }} >  <img src={deleteIcon} /> </button>
                <button title="Edit" className="commit-button" onClick={() => editer(commit)} id="edit" style={{ borderColor: theme.color }}>  <img src={editIcon} /> </button>
            </div>

            {/* <p> {commit.updated_at} </p> */}

        </div>



    )
}

export default CommitCard
