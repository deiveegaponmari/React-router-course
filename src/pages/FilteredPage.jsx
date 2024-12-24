import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
export default function FilteredPage() {
    const params=useParams();
     const[filtered,setFiltered]=useState( [] );
    useEffect(() => {
        fetch("http://localhost:5173/courses.json")
            .then((response) => response.json())
            .then((result) =>{
               // Filter courses based on the courseId from params
        const filteredDetails = result.courses
        .filter((prod) => prod.course_id === params.courseId)
        .flatMap((prod) => prod.Details); // Extract all matching Details
      setFiltered(filteredDetails); // Update the state
            })
     }, [params.courseId]); 
      return (<div className="container">
            <div className="row">
                {
                filtered.map((course,index)=>{
                   return  <div key={`${index}`} className="d-flex flex-column justify-content-between gap-2" >
                                <img src={course.image} className=" w-80 h-80" alt="firstimage" />
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                </div>
                            </div>
                })
               }
            </div>
        </div>
    )
}