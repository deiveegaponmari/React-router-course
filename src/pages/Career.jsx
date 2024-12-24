import React from 'react';
const CareerPage = () => {
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      description: "Build user-friendly web interfaces using React.js.",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "New York, USA",
      description: "Develop and maintain APIs using Node.js and Express.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "San Francisco, USA",
      description: "Design intuitive and visually appealing user interfaces.",
    },
  ];
  return (
    <div className="career-page">
      <header className="header">
        <h1>Join Our Team</h1>
        <p>Discover exciting career opportunities at our company.</p>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>We are a dynamic company committed to innovation and excellence. Join us to make an impact and grow your career!</p>
      </section>

      <section className="job-openings">
        <h2>Current Job Openings</h2>
        {
          jobListings.map((item)=>{
            return <div classname="job-list">
              <div className='job-item'>
                <h3>{item.title}</h3>
                <p>Location:{item.location}</p>
                <p>Description:{item.description}</p>
                <button></button>
              </div>
            </div>
          })
        }
        </section>
    <footer className="footer">
        <p>© {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareerPage;
