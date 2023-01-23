import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../../assest/Img1.png"
import { Link } from "react-router-dom";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { FaChalkboardTeacher } from 'react-icons/fa'
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import "./Sidebar.scss"
import { useState, useEffect } from 'react';


const Sidebar = () => {
  const menuItem = [
    {
      path: "/dashBoard",
      name: "Dashboard",
      icon: <DashboardOutlinedIcon className='icon' />
    },
    {
      path: "/Student",
      name: "Student",
      icon: <SchoolOutlinedIcon className='icon' />
    },
    {
      path: "/Grade",
      name: "Grade",
      icon: <GradeOutlinedIcon className='icon' />
    },
    {
      path: "/Teachers",
      name: "Teachers",
      icon: <FaChalkboardTeacher />
    },
    {
      path: "/AddStudent",
      name: "New Student",
      icon: <AddCircleOutlineOutlinedIcon className='icon' />


    },
    {
      path: "/AddTeacher",
      name: "Add Teacher",
      icon: <AddIcon className='icon' />


    },
    {
      path: "/Notification",
      name: "Notification",
      icon: <NotificationsNoneIcon className='icon' />


    },
    {
      path: "/login",
      name: "Logout",
      icon: <LogoutIcon className='icon' />
    }

  ]
  const [isExpanded, setExpendState] = useState(true);




  return (

    <>
      <div className={isExpanded ? "sidebar  " : "sidebar sidebar-toggle"}  >
        <div className="sidebar-container">
          <div className="logo-container">
            {isExpanded && (
              <div className="logo-container-heading">
                <img src={logo}></img>
                <span >GW Techies</span>
              </div>)

            }

            <div>
              <MenuIcon className="menu-icon"
                onClick={() => setExpendState(!isExpanded)}
              />
            </div>



          </div>
          <div className="menuItems-container">
            <div className='menu-item'>
              {
                menuItem.map((item, index) => {
                  return (
                    <div key={index} className="items">
                      <Link className='item' style={{ textDecoration: "none" }} to={item.path}>

                        <div className="icon"> {item.icon}</div>
                        {
                          isExpanded && (
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
