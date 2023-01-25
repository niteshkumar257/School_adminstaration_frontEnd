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
import { Co2Sharp } from '@mui/icons-material'


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
  { field: 'id', headerName: 'Serial-No', width: 200, headerAlign:"center",
  align:"center", },
  {
    field: 'student_name',
    headerName: 'Name',
    maxwidth: 200,
    editable:true,
    flex:1,
    headerAlign:"center",
    align:"center",
    disableColumnMenu:true,
    sortable:false
  },
 
  {
    field: 'class_id',
    headerName: 'Class',
    type: 'number',
    maxwidth: 100,
    editable: true,
    flex:1,
    headerAlign:"center",
    align:"center",
  },
  {
    field: 'medium',
    headerName: 'Medium',
 
    sortable: false,
    maxwidth: 100,
    flex:1,
    headerAlign:"center",
    align:"center",
   
  },
];
// const rows = [
//   { id: 1, Name: 'Nitesh', class:7, medium: "English" },
//   { id: 2, Name: 'Nitesh', class:7, medium: "English" },
//   { id: 3, Name: 'Nitesh', class:7, medium: "English"},
//   { id: 4, Name: 'Nitesh', class:7, medium: "English"},
//   { id: 5, Name: 'Nitesh', class:7, medium: "English" },
//   { id: 6, Name: 'Nitesh', class:7,medium: "English" },
//   { id: 7, Name: 'Nitesh', class:7, medium: "English"},
//   { id: 8, Name: 'Nitesh', class:7, medium: "English"},
 
// ];
const Grade = () => {
  const [rows, setRows] = useState([]);
  let decode = jwt_decode(localStorage.getItem("auth_token"));
  let school_id = decode.result.school_id;

  useEffect(() => {

    axios.get(`http://localhost:8080/schools/${school_id}/allstudent`)
    .then((data) => {
     // console.log(data.data.allStudent);
     console.log(data.data.allStudent);
      setRows(data.data.allStudent);
    }).catch((err) => {
      console.log(err);
    })
  },[])

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [testid,setTestid]=useState(0);
  const makrUploadHandler=()=>
  {
    console.log("form is submited");
    handleClose(true);
  }
  
  
 
  const UpdateColumn=[
    {
      field:"view",
      headerName:"Student Details",
      width:200,
    align:"center",
    headerAlign:"center",
      renderCell: (params) => {
        return (
          <div>
      <button onClick={handleOpen} className="Updatebutton">Update</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{style: {backgroundColor: 'rgba(255, 255, 255, 0)'}}}
        sx={{backdropFilter: "blur(.25px)"}}
      >
        <Box sx={style}
         >
          <form 
          
          style={{
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
            }}onSubmit={makrUploadHandler}>

         
          <div>
            <span 
             style={{
               fontSize:"1.3rem",
               color:"black",
               fontWeight:"600",
               marginBottom:"20px"
              }}
            >Upload Mark</span>
          </div>
        <div
        style={{
        display:"flex",
        flexDirection:"column",
        rowGap:"20px"
        }}
        > 
          <div>
          <TextField
                 sx={{ width:"15vw" }}
                
                 select
                 label="Test ID"
                 onChange={(e)=>setTestid(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
              >
                {Test.map((option) => (
                <option key={option.value} value={option.value}>
               {option.label}
               </option>
               ))}
              </TextField>
          </div>
       
       <div 
        style={{
          display:"flex",
          flexDirection:"column",
          rowGap:"20px"
          }}
       >
       <TextField sx={{ flex:1 }}  label="Physics" variant="outlined" 
               />
                    <TextField sx={{ flex:1 }}  label="Chemistry" variant="outlined" 
              />

                 <TextField sx={{ flex:1 }}  label="Mathematics" variant="outlined" 
                />
       </div>
             
        </div>
     
        <div 
         style={{
          display:"flex",
        justifyContent:"flex-end"
          }}>
          <button className='Updatebutton' >Submit</button>
        </div>
        </form>
        </Box>
       
          
        
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
           <div
           style={{
            width:"100%",
            height:"100vh"
           }}
           >
            <Box sx={{
          
          // "& .MuiDataGrid-root": {
          //   border: "none",
          // },
          // "& .MuiDataGrid-cell": {
          //   borderBottom: "none",
          // },
          // "& .salaryStatus-column--cell": {
          //   color:"green",
          // },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#c7c7c7",
            borderBottom: "none",
          },
          // "& .MuiDataGrid-virtualScroller": {
          //   backgroundColor:"blueviolet",        // color the background of the table
          // },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid black",
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor:"#c7c7c7",
          },}}
            
            >
            <DataTable 
           rows={rows} columns={columns.concat(UpdateColumn)}/>
            </Box>
           
           </div>
        </div>
    </div>
   </div>
  )
}

export default Grade
