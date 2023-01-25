
import Login from './pages/Login/Login';
import { useState } from 'react';
import DashBoard from './pages/DashBoard/DashBoard';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Grade from "./pages/Grade/Grade"
import StudentList from "./pages/StudentsList/Student";
import TeacherList from "./pages/TeacherList/Teachers"
import StudentForm from "./pages/StudentForm/StudentForm"
import TeacherForm from "./pages/TeacherForm/TeachersForm";
import Notification from "./pages/Notification/Notification";
import StudentePage from "./pages/SingleStudentPage/SingleStudentpage"
import TeacherPage from "./pages/SingleTeacherPage/SingleTeacherPage"




const App=()=>
{
    // gettinh student id from the student list page 
    // for showing student inforamtion in the SingleStudentapage
    // funtion for getting data from studentList page which is child of the app.js file
  const [studentId,setStudentid]=useState(0);
  const [teacherId,setTeacherid]=useState(0);

  // getting TeacherId from TecherList Page 
  const getTeacherId=(id)=>
  {
      setTeacherid(id);
  }
  // getting studentPage
    const getStudentId=(id)=>
    {
      setStudentid(id);
    }
    
    return (
        <div>
           <BrowserRouter>
        <Routes>
        <Route path='/' element={<DashBoard/>}/>


          <Route path="login" element={<Login/>}/>
          <Route path='dashBoard' element={<DashBoard/>}/>
          <Route path='Student' >
          <Route index element={<StudentList getStudentId={getStudentId} />} />
              <Route path=":student_id" element={<StudentePage />} />
          </Route>
          <Route path='Grade' element={<Grade/>}/>
          <Route path='Teachers' >
          <Route index element={<TeacherList getTeacherId={getTeacherId} />} />
              <Route path=":teacherId" element={<TeacherPage teacherId={teacherId}  />} />
          </Route>
         <Route path='AddStudent' element={<StudentForm/>}/>
         <Route path='AddTeacher' element={<TeacherForm/>}/>
         <Route path='Notification' element={<Notification/>}/>
        
         
         </Routes>

        </BrowserRouter> 
        
        </div>

    );
}
export default App;