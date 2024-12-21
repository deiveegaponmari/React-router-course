import React from "react";
export default function All({ course }) {
    return (
        <div className="container ">
            <div className="row">
            {
            course.courses.map((item, index) => {
               {/* <h2>{item.course_id}</h2> */}
                return <div key={`${item.course_id}-${index}`}
                    className="card col-md-4">
                    {
                        item.Details.map((course, index) => {
                            return <div key={`${index}`} /* className="d-inline " */ className="d-flex flex-column justify-content-between" >
                                <img src={course.image} className=" w-50 h-auto" alt="firstimage" />
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                </div>
                            </div>
                        })
                    }
                </div>
            })}
            </div>
        </div>
    )
}