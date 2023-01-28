import React, { useEffect } from 'react'
import "./SingleStudentpage.scss";
import StudentImage from "../../assest/s1.png";
import { useState } from "react"
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Table from "../../components/Table/Table"
import { useParams } from 'react-router';
import axios from "axios"

const SingleStudentpage = (props) => {

  const columns=[
    "InstallMentNo",
    "Month","Year","Amount","Status"
  ]
  
  const rows = [
     {InstallMentNo:1,Month:"jan",Year:"2023",Amount:10002,Status:"Paid"},
     {InstallMentNo:2,Month:"jan",Year:"2023",Amount:10002,Status:"Paid"},
     {InstallMentNo:3,Month:"jan",Year:"2023",Amount:10002,Status:"UnPaid"},
     {InstallMentNo:4,Month:"jan",Year:"2023",Amount:10002,Status:"Paid"},
     {InstallMentNo:5,Month:"jan",Year:"2023",Amount:10002,Status:"UnPaid"},
  
   
  ];
  // props from the app.js
  // it gives id of the selected studentPage for showing student information
  const params = useParams();

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

  // fee details
  const [feeDetails, setFeeDetails] = useState([]);
  
  let student_id = params.student_id;

 
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
            // axios request for fee details
            axios.get(`http://localhost:8080/students/${student_id}/fees`)
              .then((data) => {
                  let newFeeDetails = [];
                  console.log(data.data.studentFees);
                  let arr1 = {amount : data.data.studentFees[0].first_installment,lastDate: data.data.studentFees[0].first_installment_eta.slice(0,10), status: data.data.studentFees[0].first_installment_status};
                  let arr2 = { amount : data.data.studentFees[0].second_installment,lastDate: data.data.studentFees[0].second_installment_eta.slice(0,10), status: data.data.studentFees[0].second_installment_status};
                  let arr3 = {amount: data.data.studentFees[0].third_installment,lastDate: data.data.studentFees[0].third_installment_eta.slice(0,10), status: data.data.studentFees[0].third_installment_status};
                  newFeeDetails.push(arr1);
                  newFeeDetails.push(arr2);
                  newFeeDetails.push(arr3);
                  setFeeDetails(newFeeDetails);
              }).catch((err) => {
                console.log(err);
            })
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
                      <h1>100000</h1>
                    </div>
                    <div className="feeIcon">
                      <img src={StudentImage} alt='fee'></img>
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
              </div>
              <div className="bottom">
 
                <Table rows={rows} columns={columns}/>
 

              </div>
            </div>


            {/* student performance details */}
            <div className='perfomanceAnalytic'>
              <div className="perfomanceAnalytic-heading">
                <span>Performance Analytic</span>
              </div>
              <div className='PerformanceAnalytic-body'>

              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default SingleStudentpage
