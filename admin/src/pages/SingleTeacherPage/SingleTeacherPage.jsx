import React from 'react'
import "./SingleTeacherPage.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const SingleTeacherPage = () => {
  return (
    <div className='SingleTeacherPage-container '>
    <Sidebar/>
    <div className='SingleTeacher'>
        <Navbar/>
        <div className='SingleTeacher-page page-container'>
          Singel Teacher page
    </div>
    
  
    </div>
   </div>
  )
}

export default SingleTeacherPage