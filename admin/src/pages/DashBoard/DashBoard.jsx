import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import "./DashBoard.scss"
import Dashboard from "../../components/Dashboard/Dash"
import jwt_decode from "jwt-decode";
import axios from "axios";

import { useEffect } from 'react'

const DashBoard = () => {
  let decodeToken = jwt_decode(localStorage.getItem("auth_token"));
  let school_id = decodeToken.result.school_id;
  useEffect(() => {
     axios.get(`http://localhost:8080/schools/${school_id}`,{headers: { 'Content-Type': 'application/json'}}).then((res) => {
       console.log(res)
     }) 
  }, []);
  return (
   
    <div className='dashboard-container '>
    <Sidebar/>
    <div className='dashboard'>
      <Navbar/>
      <div className='dashboard-page page-container'>
        <div 
        style={{
          width:"100%",
          height:"100vh"
        }}
        >
        <Dashboard/>
        </div>
     
      </div>
    </div>
    </div>
  )
}

export default DashBoard;
