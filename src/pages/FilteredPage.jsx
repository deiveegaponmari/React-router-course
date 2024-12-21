import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
export default function FilteredPage() {
    const params=useParams();
    const[filtered,setFiltered]=useState({ courses: [] });
    useEffect(() => {
        fetch("http://localhost:5174/courses.json")
            .then((response) => response.json())
            .then((result) => /* console.log(result) */
            setFiltered(result.courses.find((product)=>
            product.course_id===params.courseId)))
    }, []);
      return (<div className="container">
            <div className="row">
                {
                    console.log(filtered.Details)
                }
            </div>
        </div>
    )
}