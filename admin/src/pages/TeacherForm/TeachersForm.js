import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import {useState } from "react"
import "./TeachersForm.scss"


const Subject = [
  {
    value: 'Physics',
    label: 'Physics',
  },
  {
    value: 'Math',
    label: 'Math',
  },
  {
    value: 'Chemistry',
    label: 'Chemistry',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'Hindi',
    label: 'English',
  },

];
const Medium = [
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Hindi',
    label: 'Hindi',
  },

];
const Gender = [
  {
    value: 'Physics',
    label: 'Physics',
  },
  {
    value: 'Math',
    label: 'Math',
  },
  {
    value: 'Chemistry',
    label: 'Chemistry',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'Hindi',
    label: 'English',
  },
 



]
const TeachersForm = () => {
  const [Name,setName]=useState("");
  const [Age,setAge]=useState("");
  const [Phone,setPhone]=useState("");
  const [Email,setEmail]=useState("");
  const [gender,setGender]=useState("");
  const [city,setCity]=useState("");
  const [workExp,setWorkExp]=useState("");
  const [salary,setSalary]=useState("");
 const [medium,setMedium]=useState("");
 const [subject,setSubject]=useState("");
 const [address,setAddress]=useState("");
 const [date,setDate]=useState("");


  const submitHandler=(e)=>
  {
        e.preventDefault();
        console.log("submit button is called");
  }
  return (
    <div className='teachers-container '>
    <Sidebar/>
    <div className='teachers'>
        <Navbar/>
        <div className='teachers-page page-container'>
          
        <div className="teacherForm-page-container">
            <div className='teacherForm-page-container-heading'>

              {/* header container */}
              <span >Add Teacher</span>
            </div>
            <form noValidate  onSubmit={submitHandler}>
            <div className='teachers-info-detail-container'>
           
             <div className='teachers-info-detail-student-container'>
              <div className='teachers-info-detail-student-container-subheading'>
                <span>Teacher Details</span>
              </div>
              <div className='teachers-info-detail-student-container-textfield'>
                

                {/* row one */}


                <div className='teachers-info-section '>
                <TextField sx={{ flex:1 }} label="Teacher Name" variant="outlined" 
                onChange={(e)=>setName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  label="Gender" variant="outlined" 
                onChange={(e)=>setGender(e.target.value)}/>
                 <TextField sx={{ flex:1 }} label="Email" variant="outlined" 
                type="email"
                onChange={(e)=>setEmail(e.target.value)}/>
             </div>


                {/* row two */}

                <div className='teachers-info-section '>
               
                 <TextField
                 sx={{ flex:1 }}
                
                 select
                 label="Subject"
                 onChange={(e)=>setSubject(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
                 helperText="Select Subject">
                {Subject.map((option) => (
                <option key={option.value} value={option.value}>
               {option.label}
               </option>
               ))}
              </TextField>
                 <TextField
                 sx={{ flex:1 }}
               
                 select
                 label="Medium"
                 onChange={(e)=>setMedium(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
                 helperText="Please select your currency">
                {Medium.map((option) => (
                <option key={option.value} value={option.value}>
               {option.label}
               </option>
               ))}
              </TextField>
              <TextField sx={{ flex:1 }} label="Work-Exp" variant="outlined" 
                onChange={(e)=>setWorkExp(e.target.value)}/>
        
               
                </div>


                {/* { third row} */}
                <div className='teachers-info-section '>
               
                 <TextField
                 sx={{ flex:1 }}
              
                 select
                 label="Gender"
                 onChange={(e)=>setGender(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
                 helperText="Please select your currency">
                {Gender.map((option) => (
                <option key={option.value} value={option.value}>
               {option.label}
               </option>
               ))}
              </TextField>
              <TextField sx={{ flex:1 }}label="Salary" variant="outlined" 
                type="numner"
                onChange={(e)=>setSalary(e.target.value)}/>
                
                <TextField sx={{ flex:1 }} label="City" variant="outlined" 
                type="numner"
                helperText="Enter City"
                onChange={(e)=>setCity(e.target.value)}/>
                
        
               
                </div>

                {/* 4 th row */}
                <div className='teachers-info-section '>
                  
                <TextField sx={{ flex:1 }} label="Age" variant="outlined" 
                type="numner"
                helperText="Enter Age"
                onChange={(e)=>setSalary(e.target.value)}/>
                
                <TextField sx={{ flex:1 }} 
                variant="outlined" 
                type="date"
                helperText="Enter StartDate"
                onChange={(e)=>setDate(e.target.value)}/>
                <TextField sx={{ flex:1 }} label="Addres" variant="outlined" 
                type="numner"
                 helperText="Enter the Addres"
                onChange={(e)=>setAddress(e.target.value)}/>
              
              
      
             
              </div>
              </div>
               </div>
           

            
             
           
               <div className='buttonSubmit'>
               <button>Submit</button>
                 </div>
         
           </div>
             </form>
               
             

          


          </div>
       
           
           
           
          
        </div>
    </div>

   </div>
  
  )
}

export default TeachersForm