import {useState,useEffect} from 'react'
import "./Dashboard.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Email } from '@mui/icons-material';
import Student1 from "../assest/s5.png";

import teacher from "../assest/t2.png";
import department from "../assest/d2.png";

import s4 from "../assest/school4.png";
import axios from 'axios';
import jwt_decode from "jwt-decode";
 

const Dashboard = () => {
    const [SchoolName,setSchoolName]=useState(" Broad River Grammar public english meddium  School");
const [city,setCityName]=useState("Jaballpur");
const [email,setEmail]=useState("AdminRedy8788@gmail.com");
const [phone,setPhone]=useState("89273768746");
const [AdminName,setAdminName]=useState("Lionel Messi");
const [studentCount,setStudentCount]=useState("1");
const [teacherCount,setTeacherCount]=useState("1");



// use effect
let decodeToken = jwt_decode(localStorage.getItem("auth_token"));
let school_id = decodeToken.result.school_id;
useEffect(() => {
<<<<<<< HEAD
//    axios.get(`https://5b7a-2401-4900-3e94-44bb-d9f4-c134-3726-f4f0.in.ngrok.io/schools/${school_id}`,{headers: { 'Content-Type': 'application/json'}}).then((res) => {
//     console.log(res.data);
//    }) 
setSchoolName("admin school");
setAdminName("nitesh Kumar");
setPhone("5554545");
setEmail("niteshreddy@257gmail.com");
setCityName("ambika pur")
=======
   axios.get(`http://localhost:8080/schools/${school_id}`,{headers: { 'Content-Type': 'application/json'}}).then((res) => {
    console.log(res.data);
    setSchoolName(res.data.schoolDetail.school_name);
    setAdminName(res.data.schoolDetail.admin_name);
    setEmail(res.data.schoolDetail.email);
    setPhone(res.data.schoolDetail.mobile);
    setCityName(res.data.schoolDetail.city_name);
    setStudentCount(res.data.totalStudent);
    setTeacherCount(res.data.totalTeacher);
   }) 
>>>>>>> d6ed7a0017211d62994beafb053e81e7276080e6
}, []);

  
  return (
  
    <div>
    <div className='dash'>
        <div className="top">
          <div className='school-image'>
            <img src={s4}></img>
          </div>
            <div className="basic-info">
        <div className='Name-of-school'>
            <ul>
                <li>
                 
                   <span> {SchoolName}</span>
                </li>
            </ul>
        </div>
       <div className="basic-info-container">
        <div className='basic-info-container-components'>
        <div className="info-container">
           <li>
            <label>Owner Name :</label>
            <span> {AdminName}</span>
           </li>
          </div>
          <div className="info-container">
            <li>
              <label>City : </label>
              <span>{city}</span>
            </li>
          </div>
        </div>
         <div className='basic-info-container-components'>
         <div className="info-container">
         <li>
          <label>Owner Email</label>
          <span>:{email}</span>
            </li>
          </div>
          <div className="info-container">
          <li>
            <lable>Phone : </lable>
            <span>{phone}</span>
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
                {studentCount}
            </div>
        </div>
        <div className="right">
            <div className="icon">
                <img src={Student1}></img>
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
                {teacherCount}
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

export default Dashboard;
