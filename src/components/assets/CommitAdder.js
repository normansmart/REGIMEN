import reactSyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../css/commitadd.css'

const CommitField = ({ declare, edit, setLang, currentLang, selectedProject, commitEdit , theme })=> {

  const [code, setCode] = React.useState(``);
  const [title, setTitle] = React.useState(``);

  console.log(currentLang)
  console.log(theme)
  console.log(selectedProject)
  function hover(){
    const button = document.getElementById("button")
    button.style.color = theme.backgroundcolor
    button.style.backgroundColor = theme.color
  }

  function hoverOff(){
    const button = document.getElementById("button")
    button.style.color = theme.color
    button.style.backgroundColor = theme.backgroundcolor
  }

  return (

    <form className="commit-add" onSubmit={commitEdit ? (e) => edit(e) : (e) => declare(e)} >
      <div style={{backgroundColor: theme.backgroundcolor}}  className="commit-info">
        <h1> {selectedProject.name} </h1>
        <input  style={{color: theme.color , borderColor: theme.color ,}}  type="text" id="" name="title" placeholder={commitEdit ? commitEdit.title : "Filename"} />
        <select  style={{color: theme.color}}  className="selector" name="langSelect" value={currentLang} onChange={(e) => setLang(e)}>

          <option> CSS </option>
          <option> HTML </option>
          <option> JS </option>
        </select>
        <button  style={{color: theme.color}} onMouseEnter={()=> hover()} onMouseLeave={()=> hoverOff()} id="button"> DECLARE </button>
      </div>
      <CodeEditor
        value={commitEdit ? commitEdit.commit : code}
        name="commit"
        language={currentLang}
        placeholder="Start coding here. "
        onChange={(evn) => setCode(evn.target.value)}
        style={{
          fontSize: 18,
        }}

        className="commit-box"
      />

    </form>



  )
}

export default CommitField