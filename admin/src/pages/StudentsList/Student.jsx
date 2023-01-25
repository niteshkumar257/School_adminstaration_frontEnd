import {useState} from 'react'
import "./Student.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import DataGridDemo from '../../components/DataTable/DataTable'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const columns = [
  { field: 'id', headerName: 'Serial-No', width: 150, headerAlign:"center", align:"center", },
  {field: 'Name',flex:1,headerName: 'Name',width: 200,editable:false,headerAlign:"center",align:"center",sortable:false},
  {field: 'class',headerName: 'Class',type: 'number',width: 200,flex:1,editable:false,headerAlign:"center",align:"center",sortable:false},
  {field: 'medium',headerName: 'Medium',editable:false,sortable: false,width: 200,flex:1,headerAlign:"center",align:"center",sortable:false},
];

const rows = [
  { id: 1, Name: 'Nitesh', class:7, medium: "English" },
  { id: 2, Name: 'Nitesh', class:7, medium: "English" },
  { id: 3, Name: 'Nitesh', class:7, medium: "English"},
  { id: 4, Name: 'Nitesh', class:7, medium: "English"},
  { id: 5, Name: 'Nitesh', class:7, medium: "English" },
  { id: 6, Name: 'Nitesh', class:7,medium: "English" },
  { id: 7, Name: 'Nitesh', class:7, medium: "English"},
  { id: 101, Name: 'Nitesh', class:7, medium: "English"},
 
];

const Student = (props) => {
  const [studentId,setStudentId]=useState(0);
  
  const navigate = useNavigate();  // for navigation to the studentId page after cliking the view button
  
 const handleSelect=(id)=>
 {
   props.getStudentId(id);
   setStudentId(studentId);
  navigate(`/Student/${id}`);
 }
 
  const viewColumn=[
    {
      field:"view",
      headerName:"Student Details",
      width:200,
    align:"center",
    headerAlign:"center",
      renderCell: (params) => {
        return (
          <div className="view">
            {/* <Link   to= {`/Student/${studentId}`} style={{ textDecoration: "none" }}> */}
             <button  onClick={() => handleSelect(params.row.id)}  >View</button>
            {/* </Link> */}
           
          </div>
        );
      },
    }
  ]
  return (
   <div className='student-container '>
    <Sidebar/>
    <div className='student'>
        <Navbar/>
        <div className='student-page page-container'>
          <div className="student-detail-heading">
            <span>Student Details</span>
            <div className="student-detail-search">
              <input type='number' placeholder='search by class-wise ....'/>
              <div className="student-detail-search-btn">
                <button className='btn'>SEARCH</button>
              </div>
            </div>
          </div>
          <Box
     
    
           sx={{
           
            // "& .MuiDataGrid-root": {
            //   border: "none",
            // },
            // "& .MuiDataGrid-cell": {
            //   borderBottom: "none",
            // },
            // "& .salaryStatus-column--cell": {
            //   color:"green",
            // },
            height:"30vh" ,width: '99%',
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
          <DataGridDemo 
          sx={{
            p:2
          }}
          disableColumnMenu
         
         rows={rows} columns={columns.concat(viewColumn)}/>
          </Box>
         
        
        </div>
    </div>
   </div>
  )
}

export default Student
