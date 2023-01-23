
import Login from './pages/Login/Login';
import DashBoard from './pages/DashBoard/DashBoard';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Grade from "./pages/Grade/Grade"
import StudentList from "./pages/StudentsList/Student";
import Teacher from "./pages/TeacherList/Teachers"
import StudentForm from "./pages/StudentForm/StudentForm"
import TeacherForm from "./pages/TeacherForm/TeachersForm";
import Notification from "./pages/Notification/Notification";
import StudentePage from "./pages/SingleStudentPage/SingleStudentpage"




const App=()=>
{
    
    return (
        <div>
           <BrowserRouter>
        <Routes>
        <Route path='/' element={<DashBoard/>}/>


          <Route path="login" element={<Login/>}/>
          <Route path='dashBoard' element={<DashBoard/>}/>
          <Route path='Student' >
          <Route index element={<StudentList />} />
              <Route path=":userId" element={<Notification />} />
          </Route>
          <Route path='Grade' element={<Grade/>}/>
         <Route path='Teachers' element={<Teacher/>}/>
         <Route path='AddStudent' element={<StudentForm/>}/>
         <Route path='AddTeacher' element={<TeacherForm/>}/>
         <Route path='Notification' element={<Notification/>}/>
        
         
         </Routes>

        </BrowserRouter> 
        
        </div>

    );
}
export default App;