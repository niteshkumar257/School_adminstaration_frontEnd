import React from 'react'
import "./Teachers.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import DataTable from '../../components/DataTable/DataTable'
import Box from '@mui/material/Box';


const columns = [
  { field: 'id', headerName: 'Serial No', width: 90, headerAlign:"center",
  align:"center", },
  {
    field: 'name',
    headerName:'Name',
    Width:120,
    height:50,
    editable:true,
    headerAlign:"center",
    align:"left",
    
    
  },
  {
    field: 'subject',
    headerName: 'subject',
    minwidth: 100,
    editable:true,
    headerAlign:"center",
    align:"center",
    
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 50,
    editable: true,
    headerAlign:"center",
    align:"center",
  
  },
  {
    field: 'gender',
    headerName: 'Gender',
    type:'number',
    width: 100,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
  {
    field:'experience',
    headerName: 'Work-Experience',
    type:'number',
    width: 60,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
  {
    field: 'salary',
    headerName: 'Salary',
    type:'number',
    width: 90,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
  {
    field: 'medium',
    headerName: 'Medium',
    
    width: 90,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
  {
    field: 'startDate',
    headerName: 'starDate',
    type:"date",
    width: 90,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
  {
    field: 'city',
    headerName: 'City',
    
    width: 100,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
  {
    field: 'AadharCard',
    headerName: 'AadharCard',
    type:'number',
    width: 120,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
  {
    field: 'salaryStatus',
    headerName: 'Salary Status',
    
    width: 100,
    editable:true,
    headerAlign:"center",
    align:"center",
  },
];

const rows = [
{
  id:1,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
,
{
  id:2,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
},
{
  id:3,
  name:"Nitesh",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}

,{
  id:4,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
,{
  id:5,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
,{
  id:6,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
,{
  id:7,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
,{
  id:8,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
,
{
  id:11,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
},
{
  id:10,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
,{
 id:9,
  name:"Nitesh Kumar",
  subject:"Physics",
  mob:"87456874",
  email:"Teacher45@gmail.com",
  age:20,
  gender:"male",
  experience:23,
  salary:86868,
  medium:"Both",
  startDate:"12/10/22",
  city:"Ambikapur",
  AadharCard:"7635675667",
salaryStatus:"paid"

  

  
}
 
];
const Teachers = () => {
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
            borderBottom: "none",
          },
          "& .salaryStatus-column--cell": {
            color:"green",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#c7c7c7",
            borderBottom: "none",
            fontSize:'29'
          },
          // "& .MuiDataGrid-virtualScroller": {
          //   backgroundColor:"blueviolet",        // color the background of the table
          // },
            
          "&.MuiDataGrid-columnHeaderTitle":{
              color:"white",
              fontSize:"30",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor:"#c7c7c7",
          },
          "& .MuiDataGrid-columnHeaders": {
            height:"10vh",
            backgroundColor: "#c7c7c7",
            color: "black",
            fontSize:15
          }
          
         
        }}
           >
           <DataTable rows={rows} columns={columns} 
           
           />
           </Box>
           
           
           
          
        </div>
    </div>

   </div>
  )
}

export default Teachers
