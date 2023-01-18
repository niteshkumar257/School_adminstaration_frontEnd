import React, {useEffect} from 'react'
import "./DashBoard.scss"
import Dashboard from '../component/Dashboard'
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import jwt_decode from "jwt-decode";
import axios from "axios";


const DashBoard = () => {

  // let decodeToken = jwt_decode(localStorage.getItem("auth_token"));
  // let school_id = decodeToken.result.school_id;
  // useEffect(() => {
  //    axios.get(`https://5b7a-2401-4900-3e94-44bb-d9f4-c134-3726-f4f0.in.ngrok.io/schools/${school_id}`,{headers: { 'Content-Type': 'application/json'}}).then((res) => {
  //      console.log(res)
  //    }) 
  // }, []);
 
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
