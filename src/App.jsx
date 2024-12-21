import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import All from './pages/All';
/* import Web_dev from './pages/Web_dev';
import Data_cloud from "./pages/Data_cloud";
import Program_lang from './pages/Program_lang'; */
import Career from './pages/Career';
import FilteredPage from './pages/FilteredPage';
//import './App.css'

export default function App() {
  const [course, setcourse] = useState({ courses: [] });
  const[filtered,setFiltered]=useState([]);
  useEffect(() => {
      fetch("http://localhost:5173/courses.json")
          .then((response) => response.json())
          .then((result) => /* console.log(result) */
              setcourse(result))
  }, []);
useEffect(()=>{
setFiltered(course.courses.filter((item)=>item.course_id===courseId))
},[]);
 return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route element={<All course={course}/>} path='/'></Route>
        <Route element={<FilteredPage course={filtered} courseId="WEB_DEVELOPMENT"/>}
         path='/WEB_DEVELOPMENT'></Route>
        <Route element={<FilteredPage course={filtered} courseId="DATABASE_AND_CLOUD"/>}
         path='DATABASE_AND_CLOUD'></Route>
        <Route element={<FilteredPage course={filtered} courseId="PROGRAMMING_LANGUAGES"/>}
         path='/PROGRAMMING_LANGUAGES'></Route>
        <Route element={<Career course={course}/>} path='/Career'></Route>
      </Routes>
    </div>
      )
}

