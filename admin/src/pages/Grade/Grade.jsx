import React from 'react'
import "./Grade.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import DataTable from '../../components/DataTable/DataTable'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { Co2Sharp, LensTwoTone } from '@mui/icons-material'
import { MenuItem } from '@mui/material'


const Test = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
]
const subject_list=[
  {
    value:"Physics",
    label:"physics"
  },
  {
    value:"Chemistry",
    label:"Chemistry"
  },
  {
    value:"Biology",
    label:"Biology"
  },
  
]
 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:400,
  bgcolor: 'background.paper',
  border: 'none',
  display:"flex",
  flexDirection:"column",
  rowGap:"30px",
  borderRadius: 3,
     boxShadow: "0 2px 4px rgb(0 0 0 / 4%), 0 4px 8px rgb(0 0 0 / 4%)",
     backdropFilter: "blur(5px)",
  p: 4,

};
const columns = [
  { field: 'id', headerName: 'SI.No', width: 150,
  flex:1,
   },
  {
    field: 'student_name',
    headerName: 'Name',
    maxwidth: 150,
    editable:false,
    flex:1,
    // headerAlign:"center",
    // align:"center",
    // disableColumnMenu:true,
    // sortable:false
  },
 
  {
    field: 'class_id',
    headerName: 'Class',
    type: 'number',
    maxwidth: 150,
    editable: false,
    flex:1,
    headerAlign:"left",
    align:"left",
  },
  {
    field: 'medium',
    headerName: 'Medium',
    editable:false,
    // sortable: false,
    maxwidth: 150,
    flex:1,
    // headerAlign:"center",
    // align:"center",
   
  },
];

// const subject_list=[
//   {
//     value:"p",
//     lable:"p"
//   },
//   {
//     value:"chem",
//     lable:"chem"
//   },
//   {
//     value:"bio",
//     lable:"bio"
//   },
  
// ]

// const rows = [
//   { id: 1, student_name: 'Nitesh', class_id:7, medium: "English" },
//   { id: 2, student_name: 'Nitesh', class_id:7, medium: "English" },
//   { id: 3, student_name: 'Nitesh', class_id:7, medium: "English"},
//   { id: 4, student_name: 'Nitesh', class_id:7, medium: "English"},
//   { id: 5, student_name: 'Nitesh', class_id:7, medium: "English" },
//   { id: 6, student_name: 'Nitesh', class_id:7,medium: "English" },
//   { id: 7, student_name: 'Nitesh', class_id:7, medium: "English"},
//   { id: 8, student_name: 'Nitesh', class_id:7, medium: "English"},
 
// ];
const Grade = () => {
  const [rows, setRows] = useState([]);
  let decode = jwt_decode(localStorage.getItem("auth_token"));
  let school_id = decode.result.school_id;

  useEffect(() => {
    
    axios.get(`http://localhost:8080/schools/${school_id}/allstudent`)
    .then((data) => { 
      setRows(data.data.allStudent);
    }).catch((err) => {
      console.log(err);
    })
 
  },[])

  
  
  const [open, setOpen] = useState(false);
  const [test, setTest] = useState([]);
  const [student_id, setStudentId] = useState();
  const handleOpen = (student_id) => {
    setOpen(true);  
    setStudentId(student_id);
    axios.get(`http://localhost:8080/schools/${school_id}/tests`)
    .then((data) => { 
      setTest(data.data.testDetails);
    }).catch((err) => {
      console.log(err);
    })
  }
  const handleClose = () =>{
    setOpen(false);
    setSubjectList([]);
  } 
  const [testid,setTestid]=useState(0);
  let [obtained,setObtained] = useState([]);
  const [mark,setMark]=useState(0);
  const markHandler=(e)=>
  {
    console.log(e.target.value)
   setMark(mark);
   obtained.push(mark);
  }


  // mark upload handler
  const tempRow=[];
  const markUploadHandler=(e)=>
  {
    
    setOpen(false);
      e.preventDefault();
      console.log(testid);
     console.log(inputField);
  }

   
  const [subject_list, setSubjectList] = useState([]);

  const pushMarks = (test_id) => {
    axios.post(`http://localhost:8080/students/${student_id}/tests/${test_id}/uploadmarks`)
  }
  
  const getSubjects = (test_id) =>{
    
    axios.get(`http://localhost:8080/student/${student_id}/getSubjects`)
    .then((data) => { 
      setSubjectList(data.data.allSubjects);
      pushMarks(test_id);
    }).catch((err) => {
      console.log(err);
    })
  }

  subject_list.map((item)=>
  {
       const data={
        markObtained:" ",
        TotalMark:" ",
        Subject:item.value,
        
       }
       tempRow.push(data);
  })
      const [inputField,setInputField]=useState(tempRow)
      const changeHandler=(index,e)=>
      {
        console.log(index,e);
      
          let data=[...inputField];
         
          data[index][e.target.name]=e.target.value;
       
          setInputField(data);
          
        
      }
      




  // mark upload handler
   
  const UpdateColumn=[
    {
      field:"view",
      headerName:"Student Details",
      width:200,
      sortable:false,
    // align:"center",
    // headerAlign:"center",
     disableColumnMenu:true,
      renderCell: (params) => {
        return (
          <div>
            <div className="UpdateButton">
            <button onClick={() => {handleOpen(params.row.id)}} >Update</button>
            </div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{style: {backgroundColor: 'rgba(255, 255, 255, 0)'}}}
        sx={{backdropFilter: "blur(.25px)"}}>
        <form  onSubmit={markUploadHandler}>
        <Box sx={style}>
        
          <div className='form-container'>
            <div className='heading'>
              <span>Mark Upload</span>
            </div>
            <div className='test_id_select'>
            <TextField
                 sx={{flex:1}}
                  select
                 label="Test ID"
 
                 required
                 onChange={(e)=>setTestid(e.target.value)}>
                {Test.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
            </div>
            <div className='modal-subject-main-container'>
            {
        subject_list.map((item,index)=>(
          <div key={index} className='modal-subject-container'  >
           <div className='container'>
            <span>{item.label}:</span>
           </div>
           <div>
           <TextField
           name="markObtained"
           value={tempRow[index].name}
           onChange={(e)=>changeHandler(index,e)}
             required label="Mark Obtained" variant="outlined" />
            </div>   
            <div>
            <TextField 
            name="TotalMark"
            
            value={tempRow[index].name}
            onChange={(e)=>changeHandler(index,e)}
             required  label="Total Mark" variant="outlined" />
            </div>         
    
                      
    
    
    
    

     </div>
        ))
       }
       <div className='form-button-submit'>
        <button>Submit</button> 
       </div>
            </div>
          </div>
         
         
         
    
     
     
      
        </Box>
       
        </form>
        
      </Modal>
    </div>

        );
      },
    }
  ]
  return (
   <div className='grade-container ' >
    <Sidebar/>
    <div className='grade'>
        <Navbar/>
        <div className='grade-page page-container'>
        <div className="grade-detail-heading">
            <span>Mark  Details</span>
            <div className="grade-detail-search">
              <input type='number' placeholder='search by class-wise ....'/>
              <div className="grade-detail-search-btn">
                <button className='btn'>SEARCH</button>
              </div>
            </div>
          </div>
         
            <Box sx={{style}}>
            <DataTable 
          
           rows={rows} columns={columns.concat(UpdateColumn)}/>
            </Box>
           
          
        </div>
    </div>
   </div>
  )
}

export default Grade
