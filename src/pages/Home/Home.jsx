import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";


export default function Home() {
   
    return (
        <div className="app-container">
            <Navbar />
            
            <Routes>
            <Route
                    path="/"
                    element={
                        <div>
                            <h1>Welcome to the Course Page</h1>
                            <p>Please select a course from the navigation bar.</p>
                        </div>
                    }
                />
                {
                    
                    course.courses.map((section, index) => {
                        //console.log(section)
                        return <Route
                            key={`${section.course_id}-${index}`}
                            path={`/${section.course_id}`}
                            element={
                                <div className="container">
                                    <div className="card">
                                                <img src={section.image} className="card-img-top" alt="firstimage" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{section.title}</h5>
                                                </div>
                                        </div>
                                        </div>
                                }
                               >
                                    </Route>
                    })}
                        


                
                
                {/* <Route Component={Webdev} path="/"></Route>
                <Route Component={Data_cloud} path="/datacloud"></Route>
                <Route Component={Program_lang} path="/programming"></Route> */}
            </Routes>
        </div>
    )
}