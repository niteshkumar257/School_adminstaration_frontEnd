import React from 'react'
import "./Grade.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import DataTable from '../../components/DataTable/DataTable'
import Box from '@mui/material/Box';


const Grade = () => {
  const columns = [
    { field: 'id', headerName: 'Serial-No', width: 200, headerAlign:"center",
    align:"center", },
    {
      field: 'Name',
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
      field: 'class',
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
  
  const rows = [
    { id: 1, Name: 'Nitesh', class:7, medium: "English" },
    { id: 2, Name: 'Nitesh', class:7, medium: "English" },
    { id: 3, Name: 'Nitesh', class:7, medium: "English"},
    { id: 4, Name: 'Nitesh', class:7, medium: "English"},
    { id: 5, Name: 'Nitesh', class:7, medium: "English" },
    { id: 6, Name: 'Nitesh', class:7,medium: "English" },
    { id: 7, Name: 'Nitesh', class:7, medium: "English"},
    { id: 8, Name: 'Nitesh', class:7, medium: "English"},
   
  ];
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


          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor:"#c7c7c7",
          },}}
            
            >
            <DataTable 
           rows={rows} columns={columns}/>
            </Box>
           
           </div>
        </div>
    </div>
   </div>
  )
}

export default Grade
