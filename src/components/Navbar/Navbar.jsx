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
        <Link className="nav-link " aria-current="page" href="#" to={'/course/WEB_DEVELOPMENT'}>WEB_DEVELOPMENT</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" href="#" to={'/course/DATABASE_AND_CLOUD'}>DATABASE_AND_CLOUD</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" href="#" to={'/course/PROGRAMMING_LANGUAGES'}>PROGRAMMING_LANGUAGES</Link>
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