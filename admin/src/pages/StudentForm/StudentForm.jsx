
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
import axios from "axios";
import jwt_decode from "jwt-decode";

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
  let objectDate = new Date();


let day = objectDate.getDate();

let month = objectDate.getMonth()+1;
month=month.toString();
if(month.length==1) month="0"+month;
if(day.length==1) day="0"+day;
let year = objectDate.getFullYear();
let format = year + "-" + month + "-" + day;
 
  const handleChange1=(e)=>
  { 
    setFirstInstallmentEta(format);
       if(e.target.checked===false)
       setFirstInstallmentStatus(0)
       else setFirstInstallmentStatus(1);
  }
  const handleChange2=(e)=>
  {
    setSecondInstallmentEta(format);
    if(e.target.checked===false)
    setSecondInstallmentStatus(0)
    else setSecondInstallmentStatus(1);
  }
  const handleChange3=(e)=>
  {
    setThirdInstallmentEta(format);
    if(e.target.checked===false)
    setThirdInstallmentStatus(0)
    else setThirdInstallmentStatus(1);
  }

  let decode = jwt_decode(localStorage.getItem("auth_token"));
  let school_id = decode.result.school_id;

  const [student_name, setName] = useState("");
  const [gender,setGender]=useState("");
 
  const [course_name,setCourse]=useState("");
  const [dob,setDate]=useState("");
  const [class_id,setClass]=useState("");
  const [medium, setmedium] = useState("");
  const [email,setEmail]=useState("");
  const [board, setBoard] = useState("");
  const [father_name,setFatherName]=useState("");
  const [mother_name,setMotherName]=useState("");
  const [father_profession,setFatherProfession]=useState("");
  const [mother_profession,setMotherProfession]=useState("");
  const [address,setAddres]=useState("");

  const [whatsapp_no,setPrimaryNumber]=useState("");
  const [alternative_mobile,setAlternateNumber]=useState("");
  const [aadhar_no,setAadharNumber]=useState("");
  const [total_fees, setTotal_fees] = useState(0);
  const [first_installment,setFirstInstallment]=useState(0);
  const [first_installment_eta, setFirstInstallmentEta] = useState("");
  const [first_installment_status, setFirstInstallmentStatus] = useState(0);
  const [second_installment,setSecondInstallment]=useState(0);
  const [second_installment_eta, setSecondInstallmentEta] = useState("");
  const [second_installment_status, setSecondInstallmentStatus] = useState(0);
  const [third_installment,setThirdInstallment]=useState(0);
  const [third_installment_eta, setThirdInstallmentEta] = useState("");
  const [third_installment_status, setThirdInstallmentStatus] = useState(0);

  // student_name, gender, dob, address, class_id, course_name, medium, board, father_name, father_profession, mother_name, mother_profession, whatsapp_no, alternative_mobile, email, total_fees, first_installment, first_installment_eta, first_installment_status, second_installment, second_installment_eta, second_installment_status, third_installment, third_installment_eta, third_installment_status, aadhar_no
  
  const submitHandler = (e) => {   
    e.preventDefault();  

    if(first_installment_status == 1){
      setFirstInstallmentEta(format);
    }
    if(second_installment_status == 1){
      setSecondInstallmentEta(format);
    }
    if(third_installment_status == 1){
      setThirdInstallmentEta(format);
    }

    let tot = parseInt(first_installment)  + parseInt(second_installment) + parseInt(third_installment);
    setTotal_fees(tot);
     
    console.log(student_name, gender, dob, address, class_id, course_name, medium, board, father_name, father_profession, mother_name, mother_profession, whatsapp_no, alternative_mobile, email, total_fees, first_installment, first_installment_eta, first_installment_status, second_installment, second_installment_eta, second_installment_status, third_installment, third_installment_eta, third_installment_status, aadhar_no);
   
    axios.post(`http://localhost:8080/schools/${school_id}/addStudent`, {
      student_name, gender, dob, address, class_id, course_name, medium, board, father_name, father_profession, mother_name, mother_profession, whatsapp_no, alternative_mobile, email, total_fees, first_installment, first_installment_eta, first_installment_status, second_installment, second_installment_eta, second_installment_status, third_installment, third_installment_eta, third_installment_status, aadhar_no
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  // second funtion of 
  // first installment button handler funtion
  const firstInstallMentClicked=(e)=>
  {
    e.preventDefault();  
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
                onChange={(e)=>setDate(e.target.value)}/>
                 <TextField
                 sx={{ flex:1 }}
                select
                 label="Class"
                 required
                 onChange={(e)=>setClass(e.target.value)}
               
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
             
                onChange={(e)=>setAddres(e.target.value)}/>
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
                 onChange={(e)=>setBoard(e.target.value)}
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
                onChange={((e)=>setFirstInstallment(e.target.value))}
                id="outlined-basic" label="1st InstallMent" variant="outlined" />
                <div className="fee-info-section-installment-checkbox-date">
                <Checkbox {...label}
                 checked={first_installment_status}
                 onChange={handleChange1}
                 color="success"
                 />
                 {!first_installment_status &&   
                  <TextField 
                  sx={{
                    height:"5vh"
                  }}
               variant="outlined" 
               type="date"
                helperText="Select a Date"
                onChange={(e)=>setFirstInstallmentEta(e.target.value)}/>}
                </div>
                
              
                </div>
                <div className='fee-info-section-installment'>
                <TextField
                 sx={{
                  height:"7vh"
                }}
                onChange={((e)=>setSecondInstallment(e.target.value))}
                 id="outlined-basic" label="2nd 
                
                InstallMent"
               
                 variant="outlined" />
                 <div className="fee-info-section-installment-checkbox-date">
                 <Checkbox {...label}
                 checked={second_installment_status}
                 onChange={handleChange2}
                 color="success"

                 />
                 {!second_installment_status &&
                 
                 <TextField  
                 sx={{
                  height:"5vh"
                }}
                  variant="outlined" 
               
                  type="date"
                  helperText="Select a Date"
                  onChange={(e)=>setSecondInstallmentEta(e.target.value)}/>}
                 </div>
               
              
                </div>
                <div className='fee-info-section-installment'>
                <TextField 
                sx={{
                  height:"7vh"
                }}
                onChange={((e)=>setThirdInstallment(e.target.value))}
                id="outlined-basic" label="3rd InstallMent" variant="outlined" />
                <div className="fee-info-section-installment-checkbox-date">
                <Checkbox  
                     checked={third_installment_status}
                     onChange={handleChange3}
                     color="success"
                  
               
                {...label} 
                 inputProps={{ 'aria-label': 'controlled' }}
                 />
                 {!third_installment_status &&
                 
                 <TextField  variant="outlined" 
             
                  type="date"
                  helperText="Select a Date"
                  onChange={(e)=>setThirdInstallmentEta(e.target.value)}/>}
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