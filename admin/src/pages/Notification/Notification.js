import React from 'react'
import "./Notifications.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import SingleStudentpage from '../SingleStudentPage/SingleStudentpage'
const Notification = () => {
  
  
  return (
    <div className='notification-container '>
    <Sidebar/>
    <div className='notification'>
        <Navbar/>
        <div className='notification-page page-container'>
           <SingleStudentpage/>
    </div>
    
  
    </div>
   </div>
  )
}

export default Notification
