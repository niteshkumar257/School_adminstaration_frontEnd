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
{ field: 'id', headerName: 'SI.No', 
// width: 150, 
flex:1,editable:false,align:"left",headerAlign:"left" },
{field: 'teacher_name',headerName:'Name',
// Width:150,
flex:1,editable:false,headerAlign:"left",align:"left"},
{field: 'subject_id',headerName: 'Subject',

editable:true,flex:1,editable:false ,headerAlign:"left",align:"left"},
{ field: 'mobile',headerName: 'Mobile Number',
// width: 150,
 flex:1,editable:false,headerAlign:"left",align:"left"},
];





const Teachers = (props) => {
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
{field:"view",headerName:"Teacher Details",width:200,sortable:false,
editable:false,
flex:1,
      renderCell: (params) => {
        return (
          <div className="viewButton">
            {/* <Link  to= {`/Teachers/${TeacherId}`}style={{ textDecoration: "none" }}> */}
             <button onClick={() => handleSelect(params.row.id)} >View</button>
            {/* </Link> */}
           
          </div>
        );
      },
    }
  ]


  const [isExpanded,setExpanded]=useState(false);
const isExpandedHandler=(value)=>
{
      setExpanded(value);
}
  return (
   <div className='teachers-container '>
    <Sidebar  isExpandedHandler={isExpandedHandler}/>
    <div className='teachers'>
    <Navbar adminName={props.AdminName} />
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
           <Box>
           <DataTable  expandHandler={isExpanded} rows={rows} columns={columns.concat(viewColumn)}/>
           </Box>
           
           <div className='newButton'> 
           <Link to="/Teachers/newTeacher">
           <button>Add new Teacher</button>
           </Link>
        
           </div>
           
          
        </div>
    </div>

   </div>
  )
}

export default Teachers
