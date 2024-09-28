
import React ,{useEffect}from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'

 function Navbar() {
  const navigate=useNavigate()
  const location = useLocation()
  useEffect(() => {
  console.log(location.pathname)
  
    
  }, [location])
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/Login')
  }
  return (
    <nav style={{position:"sticky",top:0,zIndex:1}} className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/Home">iNotebook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/Home'?"active":""}`} aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/About'?"active":""}`} to="/About">About</Link>
          </li>
        {  !localStorage.getItem('token')?<div className="container ">
          <Link className="btn btn-primary mx-2" to="/Login" role="button">Login</Link>
          <Link className="btn btn-danger mx-2" to="/Signup" role="button">Sign Up</Link>
 
          </div>:<button onClick={handleLogout} className='btn btn-danger'>Logout</button>}
            
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default Navbar
