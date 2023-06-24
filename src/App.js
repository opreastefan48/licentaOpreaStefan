import React, {useState, useEffect } from 'react'
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Nav_bar from './Components/Navbar/navigation_bar';
import FormCules from './Components/Tabs/cules/form';
import Fertilizare from './Components/Tabs/fertilizare/table'
import Probleme from './Components/Tabs/probleme/probleme'
import Total_cules from './Components/Tabs/total/cules_table'
import Home from './Components/Tabs/home/home'
import "./style.css";
import Login from './Components/Tabs/login/login';

function App() {
  const [isloggedin, setIsLoggedIn]=useState()
  useEffect(() => {
    document.title = "Licenta Oprea Stefan"
    setIsLoggedIn(JSON.parse(window.localStorage.getItem('isloggedin')))
    console.log(isloggedin)
  }, [])

  function LoggedinHome(){
    if(isloggedin){
      return <Home/>
    }
      else return <Login/>
  }
  function LoggedinCules(){
    if(isloggedin){
      return <FormCules/>
    }
      else return <Login/>
  }
  function LoggedinProbleme(){
    if(isloggedin){
      return <Probleme/>
    }
      else return <Login/>
  }
  function LoggedinFertilizare(){
    if(isloggedin){
      return <Fertilizare/>
    }
      else return <Login/>
  }
  function LoggedinTotal(){
    if(isloggedin){
      return <Total_cules/>
    }
      else return <Login/>
  }
  

  return (
    <Router>
      <Nav_bar />
      <Routes>
        <Route path="/home" element={LoggedinHome()} />
        <Route path="/cules" element={LoggedinCules()} />
        <Route path="/total" element={LoggedinTotal()} />
        <Route path="/fertilizare" element={LoggedinFertilizare()} />
        <Route path="/probleme" element={LoggedinProbleme()} />
        <Route path="/login" element={LoggedinHome()} />
      </Routes>
    </Router>
  );

}

export default App;
