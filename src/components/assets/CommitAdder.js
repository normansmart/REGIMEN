import reactSyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import CodeEditor from '@uiw/react-textarea-code-editor';

import '../css/commitadd.css'

function CommitField({ declare, edit, setLang, currentLang, selectedProject, commitEdit }) {

  const [code, setCode] = React.useState(``);

console.log(currentLang)

  return (

  
      <form className="commit-add" onSubmit={commitEdit ? (e) => edit(e) : (e) => declare(e)}  >
        <h1> {selectedProject.name} </h1>

        <input type="text" id="" name="title" placeholder={commitEdit ? commitEdit.title : "Title"} value={commitEdit ? commitEdit.title : null} />
        <select className="selector" name="langSelect" value={currentLang} onChange={(e) => setLang(e)}>
     
          <option> css </option>
          <option> html </option>
          <option> javascript </option>
        </select>

        <CodeEditor
          value={commitEdit ? commitEdit.commit : code}
          name="commit"
          language={currentLang}
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 18,


          }}

          className="commit-box"
        />



        <button id="button"> DECLARE </button>

      </form>

 

  )
}

export default CommitField