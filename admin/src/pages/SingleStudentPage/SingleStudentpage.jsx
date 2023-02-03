import React, { useEffect } from 'react'
import "./SingleStudentpage.scss";
import StudentImage from "../../assest/s1.png";
import { useState } from "react"
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Table from "../../components/Table/TableFee"
import { useParams } from 'react-router';
import axios from "axios"
import Chart from '../../components/Chart/Chart';

// fee details column and row

   
const subjectlist=[
  {
    value:"Physics",
    lable:"Physics",
    color:"#82ca9d",
    array:[  { "Month": "Jan","Physics": 20,},
      {"Month": "Feb", "Physics": 30,},
      {"Month": "March","Physics": 30,},
      {"Month": "April","Physics": 20,},
      {"Month": "May","Physics": 45,},
      {"Month": "June","Physics": 10,},
      {"Month": "July","Physics": 30,}]
 },
  {
    value:"Math",
    lable:"Math",
    color:"#82ca9d",
    array:[
      {
"Month": "Jan",
        "Math": 90,
      },
      {
        "Month": "Feb",
        "Math": 20,
      },
      {
        "Month": "March",
        "Math": 90,
      },
      {
        "Month": "April",
        "Math": 10,
      },
      {
        "Month": "May",
        "Math": 60,
     },
      {
        "Month": "June",
        "Math": 80,
      },
      {
        "Month": "July",
        "Math": 90, 
      }
    ]
  },
  {
    value:"Biology",
    lable:"Biology",
    color:"#82ca9d",
    array:[
      {
        "Month": "Jan",
        "Biology": 98,
      },
      {
        "Month": "Feb",
        "Biology": 67,
      },
      {
        "Month": "March",
        "Biology": 90,
      },
      {
        "Month": "April",
        "Biology": 12,
      },
      {
        "Month": "May",
        "Biology": 97,
     },
      {
        "Month": "June",
        "Biology": 23,
      },
      {
        "Month": "July",
        "Biology": 34, 
      }
    ]
  },
 
]
const columns = [ 
  { field: 'id', headerName: 'InstallMent No.', width: 150, flex:1,headerAlign:"left", align:"left",flex:1,sortable:false },
  {field: 'total_fees',flex:1,headerName: 'Amount',width: 150,editable:false,headerAlign:"left",align:"left",sortable:false},
  {field: 'LastDate',headerName: 'Last_Date',width: 150,flex:1,editable:false,headerAlign:"left",
 
  align:"left",sortable:false},
  {field: 'status',headerName: 'Status',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false,
  align:"left"},

 
];

 
const rows = [
{id:1,total_fees:1000,LastDate:"12/10/23",Status:"paid"},
{id:2,total_fees:4000,LastDate:"12/10/23",Status:"paid"},
{id:3,total_fees:8000,LastDate:"12/10/23",Status:"paid"},
{id:4,total_fees:4000,LastDate:"12/10/23",Status:"paid"},
{id:5,total_fees:8000,LastDate:"12/10/23",Status:"paid"}
]


 
 
// ];
// fee details column and row 


/////
////////
const performanceColumn = [
  { field: 'id', headerName: 'Test_id', width: 150, flex:1,headerAlign:"left", align:"left",flex:1,sortable:false },
  {field: 'Date',flex:1,headerName: 'Date',width: 150,editable:false,headerAlign:"left",align:"left",sortable:false},
  {field: 'Physics',headerName: 'Physics',width: 150,flex:1,editable:false,type:"number",headerAlign:"left", align:"left",sortable:false},
  {field: 'Math',headerName: 'Math',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false,align:"left"},
  {field: 'Chemistry',headerName: 'Chemistry',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false,align:"left"},
  {field: 'Percentage',headerName: 'Percentage',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false, align:"left"},

 
];

const  performanceRow= [
{id:1,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
{id:2,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
{id:3,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
{id:4,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
{id:5,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},

 
 
];
///////
////


const SingleStudentpage = (props) => {
 
  // props from the app.js
  // it gives id of the selected studentPage for showing student information
  const params = useParams();
  
  let student_id = params.student_id;

  const [name, setName] = useState("Nitesh Kumar Reeddy");
  const [medium, setMedium] = useState("English");
  const [course, setCourse] = useState("Jee");
  const [board, setBoard] = useState("icse");
  const [Class, setClass] = useState("12th");

  // parent details

  const [fathername, setFathername] = useState("G NagaRaju Reddy");
  const [mothername, setMotherrname] = useState("G Laxmi Reddy");
  const [fatherProfession, setFatherProfession] = useState("Worker");
  const [motherProfession, setMotherProfessin] = useState("Housewife");
  const [childrenCount, setChildrenCount] = useState(3);
  const [altNumber, setAltNumber] = useState("8767856873");
  const [primaryNumber, setPrimaryNumber] = useState("58383432");
  const [email, SetEmail] = useState("niteshredd257@gmail.com");

  const [total_fees, setTotalFees] = useState("");


  const [first_installment_status, setFirstInstallment] = useState(0); 
  const [second_installment_status, setSecondInstallment] = useState(0); 
  const [third_installment_status, setThirdInstallment] = useState(0); 
  // installMentupdateHandle Select funtion

  const renderFees = () => {
    axios.get(`http://localhost:8080/students/${student_id}/fees`)
              .then((data) => { 
                  let tot = parseInt(data.data.studentFees[0].first_installment) + parseInt(data.data.studentFees[0].second_installment) + parseInt(data.data.studentFees[0].third_installment);
                  setTotalFees(tot);
                  let newFeeDetails = [];                 
                  let arr1 = {id: 1,amount : data.data.studentFees[0].first_installment,lastDate: data.data.studentFees[0].first_installment_eta.slice(0,10), status: data.data.studentFees[0].first_installment_status};
                  let arr2 = {id: 2, amount : data.data.studentFees[0].second_installment,lastDate: data.data.studentFees[0].second_installment_eta.slice(0,10), status: data.data.studentFees[0].second_installment_status};
                  let arr3 = {id: 3,amount: data.data.studentFees[0].third_installment,lastDate: data.data.studentFees[0].third_installment_eta.slice(0,10), status: data.data.studentFees[0].third_installment_status};
                  newFeeDetails.push(arr1);
                  newFeeDetails.push(arr2);
                  newFeeDetails.push(arr3);
                  setFeeDetails(newFeeDetails);    
                  
                  setFirstInstallment(arr1.status);
                  setSecondInstallment(arr2.status);
                  setThirdInstallment(arr3.status);          
              }).catch((err) => {
                console.log(err);
            })
  }

  const updatePayment = (first_installment_status, second_installment_status, third_installment_status) => {
    axios.put(`http://localhost:8080/students/${student_id}/updatepaymentstatus`, {
      first_installment_status,
      second_installment_status,
      third_installment_status
     }).then((data) => {
      // console.log(data);
      renderFees();
     }).catch((err) => {
      console.log(err);
     })
  }

  const  InstallmentUpdateHandler=async (id)=>
  {
       console.log(id);
       if(id == 1){
        setFirstInstallment(1);
        updatePayment(1,second_installment_status,third_installment_status);
       }else if(id == 2){
        setSecondInstallment(1);
        updatePayment(first_installment_status,1,third_installment_status);
       }else{        
          setThirdInstallment(1);    
          updatePayment(first_installment_status,second_installment_status,1); 
       }   
  }

  // new row  

  const viewColumn=[
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
          <div className="InstallmentUpdateHandler">
            {/* <Link   to= {`/Student/${studentId}`} style={{ textDecoration: "none" }}> */}
            
            { params.row.status == 0 && <button  onClick={() => InstallmentUpdateHandler(params.row.id)}  >Update</button>
            }
          </div>
        );
      },
    }
  ]


  // ----

  // fee details
  const [feeDetails, setFeeDetails] = useState([]);
   

 
  useEffect(() => {
    let parent_id;
    // axios request for student details
    axios.get(`http://localhost:8080/students/${student_id}`)
      .then((data) => {
        setName(data.data.studentDetails[0].student_name);
        setMedium(data.data.studentDetails[0].medium);
        setCourse(data.data.studentDetails[0].course_name);
        setBoard(data.data.studentDetails[0].board);
        setClass(data.data.studentDetails[0].class_id);
        parent_id = data.data.studentDetails[0].parent_id;
        // axios request for parent details
        axios.get(`http://localhost:8080/parents/${parent_id}`)
          .then((data) => {  
            setPrimaryNumber(data.data.parentDetails.whatsapp_no);
            SetEmail(data.data.parentDetails.email);
            setMotherProfessin(data.data.parentDetails.mother_profession);
            setMotherrname(data.data.parentDetails.mother_name);
            setFathername(data.data.parentDetails.father_name);
            setFatherProfession(data.data.parentDetails.father_profession);
            setAltNumber(data.data.parentDetails.alternative_mobile);
            setChildrenCount(data.data.parentDetails.children);
            // function for request for fee details             
            renderFees();
          }).catch((err) => {
            console.log(err);
        })
      }).catch((err) => {
        console.log(err);
    });



  }, [])
  
 
  // this data will come for database like this
  // const FeeDetails = [
  //   { id: 1, total_fees: 7677, LastDate: "12/4/22", Status: "Paid", UpdateStatus: "Action" },
  //   { id: 2, total_fees: 0, LastDate: "12/4/22", Status: "Paid", UpdateStatus: "Action" },
  //   { id: 3, total_fees: 88745, LastDate: "12/4/22", Status: "Unpaid", UpdateStatus: "Action" },

  // ];
  // const installMentRows = FeeDetails.filter((item) => item.total_fees != 0);
  return (
    <>
      <div className="SingleStudent-container">
        <Sidebar />
        <div className="singleStudent">
 
          <Navbar />
          {/* main contaiener */}
          <div className="singleStudentPage-container page-container">

            {/* student Details container  */}
            <div className='student-info-main-container'>
              <div className='student-info-heading'>
                <h1>Student Details</h1>
              </div>
              <div className="section basic-info">

                <div className="basic-info-left">
                  <div className="studentImageWrapper">
                    <img src={StudentImage} alt='profile'
                    ></img>
                  </div>
                </div>
                <div className="basic-info-right">
                  <div className='student-Name'>
                    <span >{name}</span>
                  </div>
                  <div className='other-info-container'>
                    <div className='other-detail-info-container'>
                      <div className='student'>

                        <span className='label'
                          style={{ color: "#1378c09a", fontSize: ".9rem" }}
                        > Medium:</span>
                        <span>{medium}</span>
                      </div>
                      <div className='student'>
                        <span className='lable'> Class:</span>
                        <span>{Class}</span>
                      </div>
                    </div>
                    <div className='other-detail-info-container'>
                      <div className='student'>
                        <span className='lable'>Course:</span>
                        <span>{course}</span>
                      </div>
                      <div className='student'>
                        <span className='lable'>Board:</span>
                        <span>{board}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* student Parent detaiils  */}
            <div className='section  parent-info'>
              <div className="parent-info-heading">
                <h1>Parent Details</h1>
              </div>
              <div className="parent-info-container">
                <div className="parent-detail-info-container">
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Father Name:</span>
                    <span>{fathername}</span>
                  </div>
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Mother Name:</span>
                    <span>{mothername}</span>
                  </div>
                </div>
                <div className="parent-detail-info-container">
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Email:</span>
                    <span>{email}</span>
                  </div>
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Phone Number:</span>
                    <span>{primaryNumber}</span>
                  </div>
                </div>
                <div className="parent-detail-info-container">
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Alternate Number:</span>
                    <span>{altNumber}</span>
                  </div>
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Total children:</span>
                    <span>{childrenCount}</span>
                  </div>
                </div>
                <div className="parent-detail-info-container">
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Father Profession :</span>
                    <span>{fatherProfession}</span>
                  </div>
                  <div className='parent-detail-info-container-subbox'>
                    <span className='lable'>Mother Profession :</span>
                    <span>{motherProfession}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* student Fee details */}
            <div className='section  fee-info'>
              <div className='fee-details-heading'>
                <h1>Fee Details</h1>
              </div>
              <div className="top">
                <div className="total-fee-container">
                  <div className="left">
                    <div className="fee-amount">
                      <span >Total Fees</span>
                      <h1>{total_fees}</h1>
                    </div>
                    <div className="feeIcon">
                      <img src={StudentImage} alt='fee'></img>
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
              </div>
              <div className="bottom">
 
              
                <Table rows={feeDetails} columns={columns.concat(viewColumn)}/> 
              </div>
            </div>


            {/* student performance details */}
            <div className='section perfomanceAnalytic-info'>
              <div className="perfomanceAnalytic-heading">
                <h1>Performance Analytic</h1>
               
              </div>
              <div className='PerformanceAnalytic-body'>
             
               <div className="performanceAnalytic-body-content">
                <div className='perfomanceAnalytic-body-content-table'>
                <Table rows={performanceRow} columns={performanceColumn}/> </div>
             <div className="performanceAnalytic-body-content-charts">
              {subjectlist.map((item,index)=>(
                     <div className="container">
                      <div className='heading'>
                        <span className='head'>{item.value}</span>
                        <span className='subhead'>Recent Test Results</span>
                      </div>
                      <div className='content'>
                       <Chart  color={item.color} dataKey={item.value} data={item.array} />
                      </div>
                    </div>    
              ))}
             
                 
            
              
              
                
             </div>
               </div>


              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )

}
export default SingleStudentpage
