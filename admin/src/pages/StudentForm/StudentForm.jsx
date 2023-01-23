import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import "./Studentform.scss";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
// select medium for the selecti list
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

// select course for the drop down

const Course = [
  {
    value: 'foundation',
    label: 'Foundation',
  },
  {
    value: 'Jee-12',
    label: 'Jee-12',
  },
  {
    value: 'Jee-11',
    label: 'Jee-11',
  },
  {
    value: 'Neet-11',
    label: 'Neet-11',
  },
  {
    value: 'Neet-12',
    label: 'Neet-12',
  },
]

// select board from boardList
const Board = [
  {
    value: 'CBSE',
    label: 'CBSE',
  },
  {
    value: 'ICSE',
    label: 'ICSE',
  },
  {
    value: 'State Board',
    label: 'State Board',
  },
  
]

// choose  a class
const Batch = [

  {
    value: '12',
    label: '12',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '5',
    label: '5',
  },

]

// gender 
const gender = [
  {
    value: 'Male',
    lable: 'Male'
  },
  {
    value: 'Female',
    lable: 'Female'
  },
  {
    value: 'Not-disclose',
    lable: 'Not-disclose'
  },
  {
    value: 'Binary',
    lable: 'Binary'
  },



]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const StudentForm = () => {
  const [name, setName] = useState("");
  const [gender,setGender]=useState("");
  const [course,setCourse]=useState("");
  const [date,setDate]=useState("");
  const [Class,setClass]=useState("");
  const [email,setEmail]=useState("");
  const [Fathername,setFatherName]=useState("");
  const [MotherName,setMotherName]=useState("");
  const [FatherProfession,setFatherProfession]=useState("");
  const [MotherProfession,setMotherProfession]=useState("");
  const [addres,setAddres]=useState("");
  const [firstInstallment,setfirstInstallment]=useState(false);
  const [PrimaryNumber,setPrimaryNumber]=useState("");
  const [AlternateNumber,setAlternateNumber]=useState("");
  const [AadharNumber,setAadharNumber]=useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("funtion called");
  console.log(name);
  console.log(gender);
  console.log(course);
  alert(name+gender+course);
  }
  // second funtion of 
  // first installment button handler funtion
  const firstInstallMentClicked=(e)=>
  {
    e.preventDefault();
    setfirstInstallment(e.target.value)
    console.log("button is clicked");
    console.log(firstInstallment);
  }

  return (
    <div className='studentForm-container '>
      <Sidebar />

      <div className='studentForm'>
        <Navbar />
        <div className='studentForm-page page-container'>
          <div className="studentForm-page-container">
            <div className='student-page-container-heading'>

              {/* header container */}
              <span >Add Student</span>
            </div>
            <form noValidate  onSubmit={submitHandler}>
            <div className='student-info-detail-container'>
           
             <div className='student-info-detail-student-container'>
              <div className='student-info-detail-student-container-subheading'>
                <span>Student Details</span>
              </div>
              <div className='student-info-detail-student-container-textfield'>
                <div className='student-info-section '>
                <TextField sx={{ flex:1 }} label="Student Name" variant="outlined" 
                onChange={(e)=>setName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  label="Gender" variant="outlined" 
                onChange={(e)=>setGender(e.target.value)}/>
                 <TextField
                 sx={{ flex:1 }}
                 id="outlined-select-currency-native"
                 select
                 label="Course"
                 onChange={(e)=>setCourse(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
                 helperText="Please select your currency">
                {Course.map((option) => (
                <option key={option.value} value={option.value}>
               {option.label}
               </option>
               ))}
              </TextField>
        
               
                </div>
                <div className='student-info-section '>
                <TextField sx={{ flex:1 }}  variant="outlined" 
               helperText="Choose your birthday"
                type="date"
                onChange={(e)=>setName(e.target.value)}/>
                 <TextField
                 sx={{ flex:1 }}
                 id="outlined-select-currency-native"
                 select
                 label="Class"
                 onChange={(e)=>setCourse(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
                 helperText="Select Class">
                {Batch.map((option) => (
                <option key={option.value} value={option.value}>
               {option.label}
               </option>
               ))}
              </TextField>
                 <TextField
                 sx={{ flex:1 }}
                 id="outlined-select-currency-native"
                 select
                 label="Course"
                 onChange={(e)=>setCourse(e.target.value)}
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
        
               
                </div>
                <div className='student-info-section '>
                <TextField sx={{ flex:1 }}  variant="outlined" 
               helperText="Enter Address"
               lable="Address"
                type="text"
                onChange={(e)=>setName(e.target.value)}/>
                 <TextField sx={{ flex:1 }}  variant="outlined" 
               helperText="Enter Aadhar Number"
               lable="Aadhar Number"
                type="text"
                onChange={(e)=>setAadharNumber(e.target.value)}/>
                
                 <TextField
                 sx={{ flex:1 }}
                
                 select
                 label="Board"
                 onChange={(e)=>setCourse(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
                 helperText="Select Class">
                {Board.map((option) => (
                <option key={option.value} value={option.value}>
               {option.label}
               </option>
               ))}
              </TextField>
                
        
               
                </div>
              </div>
               </div>
             <div className='student-info-detail-parent-container'> 
             <div className='student-info-detail-parent-container-subheading'>
              <span>Parent Details</span>
             </div>
              <div className='student-info-detail-parent-container-textfield'>
              <div className='parent-info-section '>
                <TextField sx={{ flex:1 }} label="Father Name" variant="outlined" 
                onChange={(e)=>setFatherName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  label="Father profession" variant="outlined" 
                onChange={(e)=>setFatherProfession(e.target.value)}/>
                 <TextField sx={{ flex:1 }}  label="Primary Number" variant="outlined" 
                onChange={(e)=>setPrimaryNumber(e.target.value)}/>
                
        
               
                </div>
                <div className='parent-info-section '>
                <TextField sx={{ flex:1 }} label="Mother Name" variant="outlined" 
                onChange={(e)=>setMotherName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  label="Mother profession" variant="outlined" 
                onChange={(e)=>setMotherProfession(e.target.value)}/>
                 <TextField sx={{ flex:1 }}  label="Alternate Number" variant="outlined" 
                onChange={(e)=>setAlternateNumber(e.target.value)}/>
                
        
               
                </div>
                <div className='parent-info-section '>
                <TextField sx={{ width:"25.45vw"}} label="Email" variant="outlined" 
                type="email"
                onChange={(e)=>setEmail(e.target.value)}/>
                
        
               
                </div>

              </div>
             </div>
             <div className='student-info-detail-fee-container'>
             <div className='student-info-detail-fee-container-subheading'>Info Details</div>
              <div className='student-info-detail-fee-container-textfield'>
              <div className='parent-info-section section'>
              <Checkbox
              onChange={firstInstallMentClicked}
               {...label} defaultChecked />
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

export default StudentForm