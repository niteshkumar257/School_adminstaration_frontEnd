import React from 'react'
import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Person2Outlined } from '@mui/icons-material';
import AdminProfile from "../../assest/Admin.jpg";

const Navbar = () => {
  return (
    <div className='navbar gradient curve-box'>
     <div className='wrapper'>
         <div className='search'>
            <input type='text' placeholder='search..'></input>
            <div className='search-icon'>
            <SearchOutlinedIcon className='searchIcon'/>
            </div>
           
         </div>
         <div className='navbar-items'>
            <div className="navbar-items-item">
              <img src={AdminProfile}></img>
                <span>GW Head</span>
            </div>
         </div>
     </div>
    </div>
  )
}

export default Navbar
