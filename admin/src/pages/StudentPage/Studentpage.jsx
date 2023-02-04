import React, { useEffect } from 'react'
import "./Studentpage.scss";
import StudentImage from "../../assest/s1.png";
import { useState } from "react"
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Table from "../../components/Table/TableFee"
import { useParams } from 'react-router';
import axios from "axios"
import Chart from '../../components/Chart/Chart';
import Performance from "../../assest/performance.png";
import Fee from "../../assest/fee.png";

// fee details column and row
// Modification of testDetails data
 


const value = [
  {
    "test_id": 1,
    "test_date": "2020-20-04",
    "subject_name": [
      "Maths",
      "Physics",
      "Chemistry"
    ],
    "mark-obtained": [
      29, 30, 50
    ],
    "total_mark": [
      30, 50, 90
    ],
    "percentage": 90
  },
  
  
]




// row part

let perFormanceColumn = [];
const columnValue = Object.entries(value[0])


columnValue.map((it, index) => {


  if (it[0] === "subject_name") {
    it[1].map((it, index) => {
      const data = {
        field: it,
        headerName: it,
        width: "150px",
        align: "left",
        headerAlign: "left",
        sortable: false,
        flex: 1


      }

      perFormanceColumn.push(data);
    })
  }
  if (it[0] === "test_id" || it[0] === 'test_date' || it[0] === 'percentage') {
    const data = {
      field: it[0],
      headerName: it[0].charAt(0).toUpperCase() + it[0].slice(1),   // str.charAt(0).toUpperCase() + str.slice(1)
      width: "150px",
      align: "left",
      headerAlign: "left",
      sortable: false,
      flex: 1

    }

    perFormanceColumn.push(data);
  }
})
console.log(perFormanceColumn);







// const value=[
//   {
//       "test_id":1,
//       "test_date":"2020-20-04",
//       "subject_name":[
//           "Maths",
//           "Physics",
//           "Chemistry"
//       ],
//       "mark-obtained":[
//           29,30,50
//       ],
//       "total_mark":[
//           30,50,90
//       ],
//       "percentage":90
//   },
//   {
//       "test_id":2,
//       "test_date":"2020-12-04",
//       "subject_name":[
//           "Maths",
//           "Physics",
//           "Chemistry"
//       ],
//       "mark-obtained":[
//           29,30,50
//       ],
//       "total_mark":[
//           30,50,90
//       ],
//       "percentage":90
//   }
//   ]
let col;
const array = [];
value.map((item, index) => {
  let temp = Object.entries(item);
  let row = [];
  const subjectArray = [];
  const markArray = [];
  temp.map((item, index) => {

    if (item[0] === 'subject_name') item[1].map((it, index) => { subjectArray.push(it); })
    if (item[0] === 'total_mark') item[1].map((it, index) => { markArray.push(it); })

  })

  const result = {}
  temp.map((item, index) => {
    if (item[0] === "test_id" || item[0] === 'test_date' || item[0] === 'percentage')

      if (item[0] === 'test_id') {

        result["id"] = item[1];
      }
      else result[item[0]] = item[1];
  })

  for (let i = 0; i < markArray.length; i++) result[subjectArray[i]] = markArray[i];
  temp.map((item, index) => { if (item[0] === "test_id" || item[0] === 'test_data' || item[0] === 'percentage') result[item[0]] = item[1]; })
  array.push(result);

})
console.log(array);
 

/// modification of testDetails data

const subjectlist = [
  {
    value: "Physics", lable: "Physics", temp: "TotalMark", color: "#82ca9d",
    array: [{ "Month": "Jan", "Physics": 20, "TotalMark": 100, },
    { "Month": "Feb", "Physics": 30, "TotalMark": 100, },
    { "Month": "March", "Physics": 30, "TotalMark": 100, },
    { "Month": "April", "Physics": 20, "TotalMark": 100, },
    { "Month": "May", "Physics": 45, "TotalMark": 100, },
    { "Month": "June", "Physics": 10, "TotalMark": 100, },
    { "Month": "July", "Physics": 30, "TotalMark": 100, }]
  },
  {
 
    value: "Math", lable: "Math", temp: "TotalMark", color: "#82ca9d",
    array: [
      { "Month": "Jan", "TotalMark": 100, "Math": 90, },
      { "Month": "Feb", "TotalMark": 100, "Math": 20, },
      { "Month": "March", "TotalMark": 100, "Math": 100, },
      { "Month": "April", "TotalMark": 100, "Math": 10, },
      { "Month": "May", "TotalMark": 100, "Math": 100, },
      { "Month": "June", "TotalMark": 100, "Math": 80, },
      { "Month": "July", "TotalMark": 100, "Math": 100, },
 
    ]
  },
  {
    value: "Biology", lable: "Biology", temp: "TotalMark", color: "#82ca9d",
    array: [
      { "Month": "Jan", "TotalMark": 100, "Biology": 98, },
      { "Month": "Feb", "TotalMark": 100, "Biology": 67, },
      { "Month": "March", "TotalMark": 100, "Biology": 90, },
      { "Month": "April", "Totalmark": 100, "Biology": 12, },
      { "Month": "May", "TotalMark": 100, "Biology": 97, },
      { "Month": "June", "Totalmark": 100, "Biology": 23, },
      { "Month": "July", "TotalMark": 100, "Biology": 34, }
    ]
  },

] 
const columns = [ 
  { field: 'id', headerName: 'InstallMent No.', width: 150, flex:1,headerAlign:"left", align:"left",flex:1,sortable:false },
  {field: 'amount',flex:1,headerName: 'Amount',width: 150,editable:false,headerAlign:"left",align:"left",sortable:false},
  {field: 'lastDate',headerName: 'Last_Date',width: 150,flex:1,editable:false,headerAlign:"left",
 
  align:"left",sortable:false},
  {field: 'status',headerName: 'Status',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false,
  align:"left"},

 
];

 
const rows = [ 
{id:1,amount:1000,lastDate:"12/10/23",Status:"paid"},
{id:2,total_fees:4000,LastDate:"12/10/23",Status:"paid"},
{id:3,total_fees:8000,LastDate:"12/10/23",Status:"paid"},
 
] 

 
 
// ];
  
// fee details column and row 


/////
////////
// const performanceColumn = [
//   { field: 'id', headerName: 'Test_id', width: 150, flex:1,headerAlign:"left", align:"left",flex:1,sortable:false },
//   {field: 'test_date',flex:1,headerName: 'Date',width: 150,editable:false,headerAlign:"left",align:"left",sortable:false},
//   {field: 'Physics',headerName: 'Physics',width: 150,flex:1,editable:false,type:"number",headerAlign:"left", align:"left",sortable:false},
//   {field: 'Maths',headerName: 'Math',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false,align:"left"},
//   {field: 'Chemistry',headerName: 'Chemistry',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false,align:"left"},
//   {field: 'percentage',headerName: 'Percentage',type: 'date',width: 150,flex:1,editable:false,headerAlign:"left",sortable:false, align:"left"},


// ];

// const  performanceRow= [
// {id:1,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:2,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:3,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:4,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:5,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:6,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:7,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:8,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:9,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},
// {id:10,Date:"12/10/23",Physics:89,Chemistry:67,Math:91,Percentage:"98%"},




// ];
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

 // Performance 
   const [value,setValue]=useState([{}]);
  
   let perFormanceColumn=[];
   const columnValue=Object.entries(value[0])
   
   
   columnValue.map((it,index)=>
   {
       
      
       if(it[0]==="subject_name")
       {
            it[1].map((it,index)=>
            {
                const data={
                   field:it,
                   headerName:it,
                   width:"150px",
                   align:"left",
                   headerAlign:"left",
                   sortable:false,
                   flex:1
   
                   
                }
              
                perFormanceColumn.push(data);
            })
       }
     if(it[0]==="test_id" || it[0]==='test_date' || it[0]==='percentage')
     {
       const data={
           field:it[0],
           headerName:it[0].charAt(0).toUpperCase()+it[0].slice(1),   // str.charAt(0).toUpperCase() + str.slice(1)
              width:"150px",
           align:"left",
           headerAlign:"left",
           sortable:false,
           flex:1
   
        }
      
        perFormanceColumn.push(data);
     }
   })

   
  let col;
  const  array=[];
  value.map((item,index)=>
  {
  let temp=Object.entries(item);
  
  let subjectArray=[];
let markArray=[];
  temp.map((item,index)=>
  {
  
       if(item[0]==='subject_name') item[1].map((it,index)=> {subjectArray.push(it);})
       if(item[0]==='mark_obtained')item[1].map((it,index)=> {markArray.push(it);})
       
  })
  
  const result={}
  temp.map((item,index)=>{
      if(item[0]==="test_id"|| item[0]==='test_date' || item[0]==='percentage') 
    
      if(item[0]==='test_id')
      {
       
        result["id"]=item[1];
      }
      if(item[0]=="test_date")
      {
        let date=item[1].slice(0,10)
        result["test_date"]=date;
      }
      else  result[item[0]]=item[1];
  })
  
  for(let i=0;i<markArray.length;i++) result[subjectArray[i]]=markArray[i];
  temp.map((item,index)=>{ if(item[0]==="test_id"|| item[0]==='test_data' || item[0]==='percentage') result[item[0]]=item[1];})
  array.push(result);
  
  })
  useEffect(() => { 
    axios.get(`http://localhost:8080/students/${student_id}/performance`)
    .then((data) => { 
      setValue(data.data.allmarksDetail);      
    }).catch((err) => {
      console.log(err);
    })
   },[])
  // installMentupdateHandle Select funtion
  console.log(array);

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

  const viewColumn = [
    {
      field: "view", headerName: "Update", width: 200, editable: false, sortable: false, align: "left", headerAlign: "left", flex: 1,
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
                      <img src={Fee} alt='fee'></img>
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
              <div className='performanceAnalytic-info-icon'>
                <span>Performance</span>
                <img src={Performance} alt="icon"></img>
              </div>
              <div className='PerformanceAnalytic-body'> 
               <div className="performanceAnalytic-body-content">
                <div className='perfomanceAnalytic-body-content-table'>
                  {perFormanceColumn.length > 0 &&  <Table rows={array} columns={perFormanceColumn}/>}
              </div>
           
             <div className="performanceAnalytic-body-content-charts">
              {subjectlist.map((item,index)=>(
                     <div className="container">
                      <div className='heading'>
                        <span className='head'>{item.value}</span>
                        <span className='subhead'>Recent Test Results</span>


                
                        </div>
                        <div className='content'>
                          <Chart color={item.color} temp={item.temp} dataKey={item.value} data={item.array} />
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
