import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
  return (
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
   <Link className="navbar-brand text-light" to="/">TBP News</Link>  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="navbar-brand text-light" to="/general">general</Link>  
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-light" to="/sports">sports</Link>  
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-light" to="/technology">technology</Link>  
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-light" to="/business">business</Link>  
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-light" to="/science">science</Link>  
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-light" to="/health">health</Link>  
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-light" to="/entertainment">entertainment</Link>  
        </li>
        
       
       
      </ul>
     
    </div>
  </div>
</nav>

  )
    }
}
export default Navbar