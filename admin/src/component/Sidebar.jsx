import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import AddIcon from '@mui/icons-material/Add';
import Person3Icon from '@mui/icons-material/Person3';
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from "../assest/Img1.png"
import { AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-router-dom";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FaThList } from 'react-icons/fa'
import MenuIcon from '@mui/icons-material/Menu';


import "./Sidebar.scss"

import { useState ,useEffect } from 'react';
import { Grade } from '@mui/icons-material';

const Sidebar = () => {
  const menuItem=[
    {
        path:"/",
        name:"Dashboard",
        icon:<DashboardOutlinedIcon className='icon'/>
    },
    {
        path:"/",
        name:"Student",
        icon:<SchoolOutlinedIcon className='icon'/>
    },
    {
        path:"/",
        name:"Grade",
        icon:<GradeOutlinedIcon className='icon'/>
    },
    {
        path:"/",
        name:"Teachers",
        icon:<FaChalkboardTeacher/>
    },
    {
        path:"/",
        name:"Notification",
        icon:<NotificationsNoneIcon className='icon'/>
        
        
    },
    {
      path:"/Login",
      name:"Logout",
      icon:<LogoutIcon className='icon'/>
    }
   
]
  const [isExpanded, setExpendState] = useState(true);
 
 


	return (

	  <>
     <div className= {isExpanded ?"sidebar  ":"sidebar sidebar-toggle"}  >
      <div className="sidebar-container">
        <div className="logo-container">
          {  isExpanded && (
            <div className="logo-container-heading">
                <img   src={logo}></img>
               <span >GW Techies</span>
            </div>)

          }
     
     <div>
     <MenuIcon className="menu-icon" 
        onClick={()=>setExpendState(!isExpanded)}
        />
     </div>
      
      
       
        </div>
        <div className="menuItems-container">
          <div className='menu-item'>
        {
          menuItem.map((item,index)=>
            {
              return (
                <div className="items">
                 <Link  className='item'  style={{textDecoration:"none"}} to={item.path}>
                  
                    <div className="icon"> {item.icon}</div>
               {
                isExpanded &&(
                  <span className="link-text">{item.name}</span>
                )
               }
               
             
             </Link>
                </div>
                

                
             
              )
               
            })
        }
        </div>
          
       
         
          
          
        </div>
       
      </div>
     </div>
    </>
	);
}

export default Sidebar
