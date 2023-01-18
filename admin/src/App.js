
import Login from './pages/Login';
import DashBoard from "./pages/DashBoard";
import { BrowserRouter,Routes,Route } from "react-router-dom";



const App=()=>
{
    
    return (
        <div>
           <BrowserRouter>
        <Routes>
        <Route path='/' element={<DashBoard/>}/>
          <Route path="/login" element={<Login/>}></Route>
         </Routes>

        </BrowserRouter> 
        
        </div>

    );
}
export default App;