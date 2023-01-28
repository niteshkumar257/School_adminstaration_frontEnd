import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.scss";




export default function BasicTable(props) {
  console.log(props.rows);
  const [rows,setRowsm]=useState(props.rows);
  const [columns,setColumns]=useState(props.columns);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow 
          sx={ { backgroundColor:"#c7c7c7",
              
                fontSize:"1rem"} } >{
                
                  columns.map((item,index)=>(
                    
                    <TableCell key={index}  sx={{fontWeight:600,border:"none",fontSize:"1rem"}} align="center">{item}</TableCell>
                    ))
                }
        
          
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.installMentNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="center">{index+1}</TableCell>
              <TableCell align="center">{row.Month}</TableCell>
              <TableCell align="center">{row.Year}</TableCell>
              <TableCell align="center">{row.Amount}</TableCell>
              <TableCell
              sx={{
              
                fontSize:"10px",
                fontWeight:"600"
              }}
              align="center"  
                 
              >
                <span className={row.Status==="Paid"? "success":"error"}>
                {row.Status}
                </span>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
