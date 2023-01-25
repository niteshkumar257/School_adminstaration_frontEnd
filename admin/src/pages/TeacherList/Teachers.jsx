import React from 'react'
import "./Teachers.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import DataTable from '../../components/DataTable/DataTable'
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios'

// columns  of the teacher Details table
const columns = [
{ field: 'id', headerName: 'Serial No', width: 90, headerAlign:"center",align:"center", },
{field: 'teacher_name',headerName:'Name',Width:120,height:50,flex:1,editable:true,headerAlign:"center", align:"center",},
{field: 'subject_id',headerName: 'subject',minwidth: 100,editable:true,flex:1,headerAlign:"center",align:"center", },
{ field: 'mobile',headerName: 'Mobile Number',minwidth: 100, flex:1,editable:true,headerAlign:"center",align:"center",},
];


// dummy rows of the teacherTable
// const rows = [
// {id:1,name:"Nitesh Kumar",subject:"Physics",mob:"87456874",},
// {id:2,name:"Ravi Kumar",subject:"Mathematics",mob:"87456874",},
// {id:3,name:"Kumar Panda",subject:"Biology",mob:"87456874",},
// {id:4,name:"Lokesh Kumar",subject:"chemistry",mob:"87456874",},
// {id:5,name:"Prabhu Kumar",subject:"History",mob:"87456874",},
// {id:6,name:"Nitesh Kumar",subject:"Physics",mob:"87456874",},
// {id:7,name:"Ravi Kumar",subject:"Mathematics",mob:"87456874",},
// {id:8,name:"Kumar Panda",subject:"Biology",mob:"87456874",},
// {id:9,name:"Lokesh Kumar",subject:"chemistry",mob:"87456874",},
// {id:10,name:"Prabhu Kumar",subject:"History",mob:"87456874",}


// ];

const Teachers = () => {
  const [rows, setRows] = useState([]);
  let decode = jwt_decode(localStorage.getItem("auth_token"));
  let school_id = decode.result.school_id;
  let navigate = useNavigate();
  useEffect(() => {

    axios.get(`http://localhost:8080/schools/${school_id}/allteacher`)
    .then((data) => {
     // console.log(data.data.allStudent);
      setRows(data.data.teacherDetails);
      
    }).catch((err) => {
      console.log(err);
    })
  },[])



  const [teachers,setTeachers]=useState([]);

  // selected Teachers id
  const [TeacherId,setTeacherid]=useState(0);
  // view column of Teachers table

  const handleSelect=(id)=>
  {
    setTeacherid(id);
      console.log(id);
      navigate(`/Teachers/${id}`);
  }
  const viewColumn=[
{field:"view",headerName:"Student Details",width:200,align:"center", headerAlign:"center",
      renderCell: (params) => {
        return (
          <div className="view">
            {/* <Link to="/Teachers/TeacherId" style={{ textDecoration: "none" }}> */}
             <button onClick={() => handleSelect(params.row.id)} >View</button>
            {/* </Link> */}
           
          </div>
        );
      },
    }
  ]



  return (
   <div className='teachers-container '>
    <Sidebar/>
    <div className='teachers'>
        <Navbar/>
        <div className='teachers-page page-container'>
           <div className='teacher-detail-heading'>
            <span>Teachers Details</span>
            <div className='teacher-detail-search'>
             <input type='number' placeholder='Search by id... '/>
             <input type='text' placeholder='Search by Name... '/>
             <input type='phone' placeholder='Search by Phone.. '/>
              <div className='teacher-detail-search-btn'>
                <button>
                  SEARCH
                </button>
              </div>
            </div>
           </div>
           <Box
           style={{
            width:"100%",
            height:"auto",
           
            
        }}
    
        height="75vh"
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            border: 'none',
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid black",
          },
          "& .salaryStatus-column--cell": {
            color:"green",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#c7c7c7",
            borderBottom: "none",
            fontSize:'35'
          },
          // "& .MuiDataGrid-virtualScroller": {
          //   backgroundColor:"blueviolet",        // color the background of the table
          // },
            
          "&.MuiDataGrid-columnHeaderTitle":{
              color:"white",
              fontSize:"2rem",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor:"#c7c7c7",
          },
          "& .MuiDataGrid-columnHeaders": {
            height:"15vh",
            backgroundColor: "#c7c7c7",
            color: "black",
            fontSize:15,
            fontWeight:600
          }
          
         
        }}
           >
           <DataTable rows={rows} columns={columns.concat(viewColumn)} 
           
           />
           </Box>
           
           
           
          
        </div>
    </div>

   </div>
  )
}

export default Teachers
