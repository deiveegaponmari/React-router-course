export default function All({ course }) {
    return (
        <div className="container ">
            {course.courses.map((item, index) => {
                console.log(item)
                return <div key={`${item.course_id}-${index}`}
                    className="card">
                    {
                        item.Details.map((course, index) => {
                            return <div className={`${index}`}>
                                <img src={course.image} className="card-img-top" alt="firstimage" />
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                </div>
                            </div>
                        })
                    }

                    {/*  <h1> {item.course_id} </h1> */}
                </div>
            })}
        </div>
    )
}