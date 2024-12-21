import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import All from './pages/All';
import Career from './pages/Career';
import FilteredPage from './pages/FilteredPage';
//import './App.css'

export default function App() {
  const [course, setcourse] = useState({ courses: [] });
  
  useEffect(() => {
      fetch("http://localhost:5174/courses.json")
          .then((response) => response.json())
          .then((result) =>  console.log(result) 
              /* setcourse(result) */)
  }, []);

 return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route Component={<All course={course}/>} path='/'></Route>
        <Route Component={FilteredPage}
         path='/course/:courseId'></Route>
        <Route Component={<Career course={course}/>} path='/Career'></Route>
      </Routes>
    </div>
      )
}

