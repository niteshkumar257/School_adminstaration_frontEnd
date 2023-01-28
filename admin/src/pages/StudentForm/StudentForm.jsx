
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
const Gender = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  },
  {
    value: 'Not-disclose',
    label: 'Not-disclose'
  },
  {
    value: 'Binary',
    label: 'Binary'
  },



]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const StudentForm = () => {
  const [checked1,setchecked1]=useState(false);
  const [checked2,setchecked2]=useState(false);
  const [checked3,setchecked3]=useState(false);
  const handleChange1=(e)=>
  {
       console.log(e.target.checked)
        setchecked1(e.target.checked)
  }
  const handleChange2=(e)=>
  {
       console.log(e.target.checked)
        setchecked2(e.target.checked)
  }
  const handleChange3=(e)=>
  {
       console.log(e.target.checked)
        setchecked3(e.target.checked)
  }
  const [name, setName] = useState("");
  const [gender,setGender]=useState("");
  const [course,setCourse]=useState("");
  const [medium,setmedium]=useState("");
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
  alert("All field are required");
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
                required
                onChange={(e)=>setName(e.target.value)}/>
               <TextField
                 sx={{ flex:1 }}
                
                 select
                 label="Gender"
                 required
                 onChange={(e)=>setGender(e.target.value)}
                  helperText="Select Gender">
                {Gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
                 <TextField
                 sx={{ flex:1 }}
                 id="outlined-select-currency"
                 select
                 label="Course"
                 required
                 onChange={(e)=>setCourse(e.target.value)}
                  helperText="Select Course">
                {Course.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
        
               
                </div>
                <div className='student-info-section '>
                <TextField
                 sx={{ flex:1 }}  variant="outlined" 
               helperText="Select Date of Birth"
                type="date"
                onChange={(e)=>setName(e.target.value)}/>
                 <TextField
                 sx={{ flex:1 }}
                select
                 label="Class"
                 required
                 onChange={(e)=>setCourse(e.target.value)}
               
                //  SelectProps={{
                //  native: true,
                //  }}
                 helperText="Select Class">
                {Batch.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
                 <TextField
                 sx={{ flex:1 }}
                 required
                 select
                 label="Medium"
                 onChange={(e)=>setmedium(e.target.value)}
                //  SelectProps={{
                //  native: true,
                //  }}
                >
                {Medium.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
        
               
                </div>
                <div className='student-info-section '>
                <TextField sx={{ flex:1 }}  variant="outlined" 
               helperText="Enter Address"
               label="Address"
                type="text"
                required
             
                onChange={(e)=>setName(e.target.value)}/>
                 <TextField sx={{ flex:1 }}  variant="outlined" 
               helperText="Enter Aadhar Number"
               label="Aadhar Number"
                type="text"
                required
                onChange={(e)=>setAadharNumber(e.target.value)}/>
                
                 <TextField
                 sx={{ flex:1 }}
                 required
                 select
                 label="Board"
                 onChange={(e)=>setCourse(e.target.value)}
                //  SelectProps={{
                //  native: true,
                //  }}
                //  helperText="Select Class"
                 >
                {Board.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
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
                   required
                onChange={(e)=>setFatherName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  label="Father profession" variant="outlined" 
                   required
                onChange={(e)=>setFatherProfession(e.target.value)}/>
                 <TextField sx={{ flex:1 }}  label="Primary Number" variant="outlined" 
                    required
                onChange={(e)=>setPrimaryNumber(e.target.value)}/>
                
        
               
                </div>
                <div className='parent-info-section '>
                <TextField sx={{ flex:1 }} label="Mother Name" variant="outlined" 
                   required
                onChange={(e)=>setMotherName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  label="Mother profession" variant="outlined" 
                   required
                onChange={(e)=>setMotherProfession(e.target.value)}/>
                 <TextField sx={{ flex:1 }}  label="Alternate Number" variant="outlined" 
                    required
                onChange={(e)=>setAlternateNumber(e.target.value)}/>
                
        
               
                </div>
                <div className='parent-info-section '>
                <TextField sx={{ flex:0.317}} label="Email" variant="outlined" 
                   required
                type="email"
                onChange={(e)=>setEmail(e.target.value)}/>
                
        
               
                </div>

              </div>
             </div>
             <div className='student-info-detail-fee-container'>
             <div className='student-info-detail-fee-container-subheading'>
             <span>Fee Details</span>
             </div>
              <div className='student-info-detail-fee-container-textfield'>
              <div className='fee-info-section section'>
                <div className='fee-info-section-installment'>
                <TextField 
                sx={{
                  height:"7vh"
                }}
                id="outlined-basic" label="1st InstallMent" variant="outlined" />
                <div className="fee-info-section-installment-checkbox-date">
                <Checkbox {...label}
                 checked={checked1}
                 onChange={handleChange1}
                 color="success"
                 />
                 {!checked1 &&   
                  <TextField 
                  sx={{
                    height:"5vh"
                  }}
               variant="outlined" 
               type="date"
                helperText="Select a Date"
                onChange={(e)=>setName(e.target.value)}/>}
                </div>
                
              
                </div>
                <div className='fee-info-section-installment'>
                <TextField
                 sx={{
                  height:"7vh"
                }}
                 id="outlined-basic" label="2nd 
                
                InstallMent"
               
                 variant="outlined" />
                 <div className="fee-info-section-installment-checkbox-date">
                 <Checkbox {...label}
                 checked={checked2}
                 onChange={handleChange2}
                 color="success"

                 />
                 {!checked2 &&
                 
                 <TextField  
                 sx={{
                  height:"5vh"
                }}
                  variant="outlined" 
               
                  type="date"
                  helperText="Select a Date"
                  onChange={(e)=>setName(e.target)}/>}
                 </div>
               
              
                </div>
                <div className='fee-info-section-installment'>
                <TextField 
                sx={{
                  height:"7vh"
                }}
                id="outlined-basic" label="3rd InstallMent" variant="outlined" />
                <div className="fee-info-section-installment-checkbox-date">
                <Checkbox  
                     checked={checked3}
                     onChange={handleChange3}
                     color="success"
                  
               
                {...label} 
                 inputProps={{ 'aria-label': 'controlled' }}
                 />
                 {!checked3 &&
                 
                 <TextField  variant="outlined" 
             
                  type="date"
                  helperText="Select a Date"
                  onChange={(e)=>setName(e.target.value)}/>}
                </div>
               
              
                </div>
            
            
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