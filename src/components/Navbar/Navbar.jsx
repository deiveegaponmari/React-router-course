import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
  return ( <nav className="navbar navbar-expand-lg bg-body-tertiary ">
<div className="container-fluid d-flex">
  {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#" >ALL</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#" to={'/'}>FRONT END DEVELOPMENT</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={'/mernstack'}>MERN STACK DEVELOPMENT  </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={'/mobile'}>MOBILE APP DEVELOPMENT</Link>
      </li>
       </ul>
  </div>
</div>
</nav>
  )
}
export default Navbar;