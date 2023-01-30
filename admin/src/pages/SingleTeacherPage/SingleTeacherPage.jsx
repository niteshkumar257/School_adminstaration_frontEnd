import {useState, useEffect} from 'react'
import "./SingleTeacherPage.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import StudentImage from "../../assest/s1.png";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Table from "../../components/Table/TableFee"
import { SocialDistance } from '@mui/icons-material';
import { FaBlackTie } from 'react-icons/fa';



const columns = [
  { field: 'id', headerName: 'SI-No', width: 150, headerAlign:"left", align:"left",flex:1,sortable:false },
  {field: 'Month',headerName: 'Month',width: 150,editable:false,headerAlign:"left",align:"left",
  sortable:false,flex:1},
  {field: 'Year',headerName: 'Year',type: 'number',width: 150,editable:false,headerAlign:"left",
  sortable:false,flex:1,
  align:"left"},
  {field: 'Amount',headerName: 'Amount',type: 'number',width: 150,editable:false,headerAlign:"left",
  sortable:false,flex:1,
  align:"left"},
 
 
];

const rows = [
  { id: 1, Month: 'Jan',Year:"2002",Amount:1000 },
  { id: 2, Month: 'March',Year:"2004" ,Amount:2000},
  { id: 3, Month: 'Feb',Year:"2006" ,Amount:3000},
 
 
];

const SingleTeacherPage = () => {
  let params = useParams();
  const [name,setName]=useState("Nitesh Kumar Reddy");
  const [medium,setMedium]=useState("English");
  const [email,SetEmail]=useState("niteshredd257@gmail.com");
  const [age,setAge]=useState(23);
  const [salary,setSalary]=useState(10000);
  const [City,setCity]=useState("Ambikar Pur");
  const [workExp,setWorkExp]=useState(10);
  const [AadharCard,setAadharCard]=useState("1989300192");
  const [date,setDate]=useState("12/10/23");
  const [gender,setGender]=useState("Male");
  let teacher_id = params.teacherId;
  

  /// new column for update status


const salaryUpdate=(id)=>
{
    console.log(id);
}
  const updateColumn=[
    {
      field:"view",
      headerName:"Update",
      width:200,
      editable:false,
      sortable:false,
    align:"left",
    headerAlign:"left",
    flex:1,
      renderCell: (params) => {
        return (
          <div className="viewButton">
            {/* <Link   to= {`/Student/${studentId}`} style={{ textDecoration: "none" }}> */}
             <button  onClick={() => salaryUpdate(params.row.id)}  >View</button>
            {/* </Link> */}
           
          </div>
        );
      },
    }
  ]




  // new column for update status

  useEffect(() => {
    axios.get(`http://localhost:8080/teacher/${teacher_id}`)
    .then((data) => {
      console.log(data.data.teacherDetails);
      setName(data.data.teacherDetails[0].teacher_name);
      SetEmail(data.data.teacherDetails[0].email);
      setAge(data.data.teacherDetails[0].age);
      setSalary(data.data.teacherDetails[0].salary);
      setCity(data.data.teacherDetails[0].city);
      setDate(data.data.teacherDetails[0].date_of_join.slice(0,10))
      setWorkExp(data.data.teacherDetails[0].experience);
      setGender(data.data.teacherDetails[0].gender);
    }).catch((err) => {
      console.log(err);
    })
  },[])
  return (
    <div className='SingleTeacherPage-container '>
    <Sidebar/>
    <div className='SingleTeacher'>
        <Navbar/>
        <div className='SingleTeacher-page page-container'>
        <div className='student-info-main-container'>
    <div className='student-info-heading'>
      <h1> Teachers Details</h1>
    </div>
    <div className="section basic-info">
    
   
    <div className="basic-info-right">
      <div className='student-Name'>
        <span >{name}</span>
      </div>
      <div className='other-info-container'>
        <div className='other-detail-info-container page-container'>
          <div className='student'>
           
            <span className='label'
            style={{color:"#1378c09a", fontSize: ".9rem"}}
            > Medium :</span>
            <span>{medium}</span>
          </div>
          <div className='student'>
            <span className='lable'> Email :</span>
            <span>{email}</span>
          </div>
          <div className='student'>
            <span className='lable'> Work-Experinece :</span>
            <span>{workExp}</span>
          </div>
        
        </div>
        <div className='other-detail-info-container'>
        <div className='student'>
            <span className='lable'>
              Age :
            </span>
            <span>{age}</span>
          </div>
          <div className='student'>
            <span className='lable'>Gender :</span>
            <span>{gender}</span>
          </div>
          <div className='student'>
            <span className='lable'>Salary :</span>
            <span>{salary}</span>
          </div>
         
        </div>
        <div className='other-detail-info-container'>
        <div className='student'>
            <span className='lable'>
              Start Date :
            </span>
            <span>{date}</span>
          </div>
          <div className='student'>
            <span className='lable'>City :</span>
            <span>{City}</span>
          </div>
          <div className='student'>
            <span className='lable'>Aadhar Number :</span>
            <span>{AadharCard}</span>
          </div>
         
        </div>
      </div>
    </div>
   </div>
   <div 
   className='student-salary-container'
   style={{
    width:"98%",
    height:"60vh"
  
   
   }}
   >
    <div className='student-salary-container-heading'>
      <h1>Salary Details</h1>
    
       </div>
       <div className='student-info-container-body'>

       <Table  rows={rows} columns={columns.concat(updateColumn)}/>
 
       </div>

   </div>
    </div>
    </div>
    
  
    </div>
   </div>
  )
}

export default SingleTeacherPage