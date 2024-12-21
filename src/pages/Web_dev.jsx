export default function Web_dev({course}){
    return (
        <div className="container ">
    {
  course.courses.filter((data)=>data.course_id==="WEB_DEVELOPMENT")
    }
        </div>
    )
} 