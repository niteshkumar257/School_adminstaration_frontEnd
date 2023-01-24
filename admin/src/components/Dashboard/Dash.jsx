import React from 'react'
import "./Dash.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Email } from '@mui/icons-material';
import student1 from "../../assest/s5.png";
import teacher from "../../assest/t2.png";
import department from "../../assest/d2.png";
import widgest from '../Widgest/widgest';
import s4 from "../../assest/school4.png";
const data={
    SchoolName:"Broad River Grammar public english meddium  School",
    city:"Ambika pur",
    Email:"Admin123@gmail.com",
    Phone:"8249829096",
    AdminName:"Admin Name"
}


const Dashboard = () => {
  
  return (
  
    <div>
    <div className='dash'>
        <div className="top">
          <div className='school-image'>
            <img src={s4}></img>
          </div>
            <div className="basic-info">
        <div   className='Name-of-school'>
           
                <li>
                 
                   <span> {data.SchoolName}</span>
                </li>
        
        </div>
       <div className="basic-info-container">
        <div className='basic-info-container-components'>
        <div className="info-container">
           <li>
            <label>Owner Name : </label>
            <span> {data.AdminName}</span>
           </li>
          </div>
          <div className="info-container">
            <li>
              <label>City : </label>
              <span>{ data.city}</span>
            </li>
          </div>
        </div>
         <div className='basic-info-container-components'>
         <div className="info-container">
         <li>
          <label>Owner Email</label>
          <span>: {data.Email}</span>
            </li>
          </div>
          <div className="info-container">
          <li>
            <lable>Phone : </lable>
            <span>{data.Phone}</span>
            </li>
          </div>
         </div>
         
       </div>
            </div>
        </div>
        <div className='bottom'>
            <div className="left-container">
            <div className="widgest-container">
        <div className="left">
            <div className="Title">
                Student
            </div>
            <div className="count">
                10000
            </div>
        </div>
        <div className="right">
            <div className="icon">
                <img src={student1}></img>
            </div>
        </div>
    </div>
             
            </div>
            <div className="mid-container">
            <div className="widgest-container">
        <div className="left">
            <div className="Title">
                Deapartment
            </div>
            <div className="count">
                20+
            </div>
        </div>
        <div className="right">
            <div className="icon">
                <img src={department}></img>
            </div>
        </div>
    </div>
            </div>
            <div className="right-container">
            <div className="widgest-container">
        <div className="left">
            <div className="Title">
             Teachers
            </div>
            <div className="count">
                50+
            </div>
        </div>
        <div className="right">
            <div className="image-icon">
                <img src={teacher}></img>
            </div>
        </div>
    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard
