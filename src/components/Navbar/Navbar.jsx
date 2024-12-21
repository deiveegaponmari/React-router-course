import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar(){
  return ( <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid ">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#" to={'/'}>ALL</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" href="#" to={'/course/:courseId'}>WEB DEVELOPMENT</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={'/Career'}>Career</Link>
      </li>
       </ul>
  </div>
</div>
</nav>
  )
}
export default Navbar;