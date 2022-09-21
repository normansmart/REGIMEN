import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Login from './components/Login';
import SignUp from './components/Signup';
import GroupAddForm from './components/assets/GroupAddForm';
import ProjectAddForm from './components/assets/ProjectAddForm';
import Settings from './components/assets/Settings';
import Dashboard from './components/pages/Dashboard';
import SideBar from './components/assets/SideBar';
import './App.css';
import './components/css/onboarding.css'
import Navigation from './components/Navigation';
import UserTab from './components/UserTab';

import CommitField from './components/assets/CommitAdder';


function App() {

  //User info
  const [currentUserId, setCurrentUserId] = useState(null)
  const [themeId , setThemeId] = useState(null)
  const [user, setUser] = useState({})
  const [userProjects, setUserProjects] = useState([])
  const [userCohorts, setUserCohorts] = useState([])
  const [userCommits, setUserCommits] = useState([])
  const [userColleagues, setUserColleagues] = useState([])
  

  const [signUpShow , setSignUpShow] = useState(false)
  const [signInShow , setSignInShow] = useState(true)






  const [onBoardGroupShow, setOnBoardGroupShow] = useState(true)
  const [onBoardProjectShow, setOnBoardProjectShow] = useState(true)
  const [onBoardThemeSelect, setOnBoardThemeSelect] = useState(true)
  const [onBoarded, setOnBoarded] = useState(false)




  const [userSettings, setUserSettings] = useState({
    user_id:currentUserId,
    backgroundcolor: "#FFF9F2" , 
    font: "Mulish" ,
    color: "#38383A"

})


  const [newProject, setNewProject] = useState({})

  //Selected project object info & associated states
  const [selectedProject, setSelectedProject] = useState({})
  const [commits, setCommits] = useState([])
  const [editCommit, setEditCommit] = useState(null)



  const [sideBarShow, setSideBarShow] = useState(false)




  const [currentLang, setCurrentLang] = useState("")


  const [newProjectShow, setNewProjectShow] = useState(false)

  function showProjectForm() {
    setNewProjectShow(!newProjectShow)
  }


  // useEffect(() => {
  //   fetch("/me")
  //     .then(r => r.json())
  //     .then(user => {
  //       if(user.id){
  //         const myProjects = user.projects
  //         const myCohorts = user.cohorts
  //         const myCommits = user.commits
  //         const myColleagues = user.friends

  //         setUser(user)
  //         setUserProjects(myProjects)
  //         setUserCohorts(myCohorts)
  //         setUserCommits(myCommits)
  //         setUserColleagues(myColleagues)
  //       }

  //     })
  // }, [])

  function onLogin(userId) {
    setCurrentUserId(userId)
    console.log(`logged in user ${userId}`)
    fetch(`/users/${userId}`)
      .then(r => r.json())
      .then(user => {

        const myProjects = user.projects
        const myCohorts = user.cohorts
        const myCommits = user.commits
        const myColleagues = user.friends
        const onBoarded = user.onboarded
        

        setUser(user)
        setUserProjects(myProjects)
        setUserCohorts(myCohorts)
        setUserCommits(myCommits)
        setUserColleagues(myColleagues)
        setOnBoarded(onBoarded)
      
     
      })

  }

  
 

  function refresh() {
    console.log(currentUserId)
    fetch(`/users/${currentUserId}`)
      .then(r => r.json())
      .then(user => {
        const myProjects = user.projects
        const myCohorts = user.cohorts
        const myCommits = user.commits
        const myColleagues = user.friends
        const myTheme = user.setting

        setUser(user)
        setUserProjects(myProjects)
        setUserCohorts(myCohorts)
        setUserCommits(myCommits)
        setUserColleagues(myColleagues)
       if(myTheme){
        setUserSettings(myTheme)
       }

      })

  }



  function assignProject(project) {
    console.log(project)
    fetch("/assignments", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          cohort_id: 1 ,
          project_id: project.id,
          user_id: currentUserId,
        }
      )
    }
    ).then(r => r.json())
      .then(i => {
        console.log(i)
        refresh()

      })

  }


  function createProject(e) {

    e.preventDefault();
    fetch("/projects", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          name: e.target.name.value,
          description: e.target.description.value,
          key: e.target.key.value,
          front_lang: e.target.front_lang.value,
          back_lang: e.target.back_lang.value,
          private: e.target.private.value

        }
      )
    }
    ).then(r => r.json())
      .then(i => {
        assignProject(i)
        setOnBoardProjectShow(false)

      })




  }



  //POST commit to specified selected project
  function addCommit(e) {
    console.log("added")
    e.preventDefault();
    fetch("/commits", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          user_id: user.id,
          project_id: selectedProject.id,
          title: e.target.title.value,
          language: e.target.langSelect.value,
          commit: e.target.commit.value

        }
      )
    }
    ).then(r => r.json())
      .then(i => {
        console.log(i)
        handleRefresh(i)
      })

    e.target.reset()
  }

  //POST rerender
  function handleRefresh(commit) {

    fetch(`/users/${currentUserId}`)
      .then(r => r.json())
      .then(user => {
        const myProjects = user.projects
        const myGroups = user.cohorts
        const myCommits = user.commits
        const myColleagues = user.friends

        setUser(user)
        setUserProjects(myProjects)
        setUserCohorts(myGroups)
        setUserCommits(myCommits)
        setUserColleagues(myColleagues)

      })

    setCommits([commit, ...commits])

  }










  //EDIT selected commit

  function handleEditCommit(commit) {
    setEditCommit(commit)
    console.log(commit)
  }

  function editExistingCommit(e) {

    console.log("Edited")
    e.preventDefault();
    fetch(`/commits/${editCommit.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          user_id: user.id,
          project_id: selectedProject.id,
          title: e.target.title.value,
          language: e.target.langSelect.value,
          commit: e.target.commit.value

        }
      )
    }
    ).then(r=> r.json())
    .then(item=>{
      handleUpdateItem(item)
    })



  }


  function handleUpdateItem(updatedItem) {
    const updatedItems = commits.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setCommits(updatedItems);
  }








  //DELETE commit from specified selected commit
  function handleDelete(commit) {
    console.log(commit.id)
    fetch(`/commits/${commit.id}`, {
      method: "DELETE"
    })
    console.log("deleted")
    handleDeleteUpdate(commit)
  }
  //DELETE COMMIT rerender
  function handleDeleteUpdate(commit) {
    const updatedItems = commits.filter((item) => item.id !== commit.id);
    console.log(updatedItems)
    setCommits(updatedItems);
  }






  function sidebarSetter(item) {

    setSelectedProject(item)
    setCommits(item.commits)


    setSideBarShow(true)

  }


  function sideBarHide() {
    setSideBarShow(!sideBarShow)
  }

  function setLanguage(e) {
    setCurrentLang(e.target.value)
    console.log(currentLang)

  }








  function onBoardGroupAdd(e) {
    console.log("cohort added")
    e.preventDefault();
    fetch("/cohorts", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          name: e.target.name.value,
          tag: e.target.tag.value,
          message: e.target.message.value,
          admin_id: user.id,
          join_key: e.target.join_key.value,
          private: false

        }
      )
    }
    ).then(r => r.json())
      .then(i => {
     
        addMembership(i)
        setOnBoardGroupShow(false)

      })
  }

  function addMembership(group) {

    console.log("memberassigned")
    fetch("/memberships", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          user_id: user.id,
          cohort_id: group.id

        }
      )
    }
    ).then(r => r.json())
      .then(i => {
     
      
        refresh()
       

      })
  }


 



  function themeSetter(theme){
   
    fetch(`/settings`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
       
       theme
        
      )
    }
    )
    .then(r => r.json())
    .then(t =>{
      setUserSettings(t)

     
    })
  }


  function themeSelect(theme){

  
 
    fetch(`/settings/${userSettings.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          user_id: currentUserId ,
          backgroundcolor: theme.backgroundcolor,
          color: theme.color,
          font: theme.font,
        }
    
        
      )
    }
    ).then(r => r.json())
    .then(t =>{
 
    
     setUserSettings(t)
    
     console.log(t)
    })

  }

console.log(user)

  function finishOnboard(){
    setOnBoardThemeSelect(false)

    fetch(`/users/${currentUserId}`, {
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
      onboarded: true

    }
        
      )
    }
    ).then(r => r.json())
    .then(t =>{
 
    
    console.log(t)

    setOnBoarded(true)
    
   
    })
    
 

  }


function hideSignUp(){
  setSignUpShow(false)
  setSignInShow(false)

}

function showSignUp(){
  setSignUpShow(true)
}


function logout() {
  console.log('logging out')
  fetch("/logout", {
    method: "DELETE"
  })
  setCurrentUserId(null)
 window.location.reload();
}

  return (
    <div className="App" style={userSettings? { fontFamily: userSettings.font , backgroundColor: userSettings.backgroundcolor , color: userSettings.color} : console.log("User not here")}>

      <div className='onboarding-container' style={onBoarded ? {display:"none" , zIndex: -10}:{display: "flex" , zIndex:80}}>

        <div className='onboard-screen' id='ob1' style={onBoardGroupShow ? { display: "flex" , backgroundColor:userSettings.backgroundcolor } : { display: "none" }}>
          <GroupAddForm onboardGroup={onBoardGroupAdd} />
        </div>


        <div className='onboard-screen' id='ob2' style={onBoardProjectShow ? { display: "flex", backgroundColor:userSettings.backgroundcolor } : { display: "none" } }>
          <ProjectAddForm post={createProject} groups={userCohorts} />

        </div>

        <div className='onboard-screen' id='ob3' style={onBoardThemeSelect ? { display: "block", backgroundColor:"#FFF9F2" } : { display: "none" }} >
          <Settings themeSelect={themeSetter} userid={currentUserId ? currentUserId : console.log("no user active")} currentTheme={userSettings} style={onBoardProjectShow ? { display: "flex", backgroundColor:userSettings.backgroundcolor } : { display: "none" }} id="obj3-L" />

          <button className='get-started' onClick={()=> finishOnboard()}> Get Started </button>
        </div>


      </div>



      <Login onLogin={onLogin} currentUserId={currentUserId} setTheme={themeSetter} themeDefault={userSettings} setSignUp={showSignUp} showSignIn={signInShow} />
      <SignUp onLogin={onLogin} currentUserId={currentUserId} setTheme={themeSetter} themeDefault={userSettings} setShow={signUpShow} hide={hideSignUp} />

   

      <Router>





        <div className='navigation-container'>
          <UserTab user={user} myprojects={userProjects} mycohorts={userCohorts} mycommits={userCommits} mycolleagues={userColleagues} />
          <Navigation currentUserId={currentUserId} logout={logout} />
        </div>

        <Routes>

          <Route path="/" exact element={
            <Dashboard projects={userProjects}
              sideSelect={sidebarSetter}
              selectedProject={selectedProject}
              sideBarToggle={sideBarShow}
              switcher={sideBarHide}
              commits={commits}
              declare={addCommit}
              editer={handleEditCommit}
              deleter={handleDelete}
              setLang={setLanguage}
              currentLang={currentLang}

              groups={userCohorts}
              post={createProject}
              newProject={showProjectForm}
              newPShowToggle={newProjectShow}

              theme={userSettings}

            />
          } />




          <Route path="/declaration" element={
            <CommitField declare={addCommit}
              setLang={setLanguage}
              currentLang={currentLang}
              selectedProject={selectedProject}

            />} />



          <Route path='/commitedit' element={
            <CommitField
              declare={addCommit}
              edit={editExistingCommit}
              setLang={setLanguage}
              currentLang={currentLang}
              selectedProject={selectedProject}
              commitEdit={editCommit}
            />} />



            <Route path='/settings' element={ <Settings themeSelect={themeSelect} userid={user.id} currentTheme={userSettings} id="obj3-L" />} />

        </Routes>
      </Router>

   





    </div>
  );
}

export default App;
