import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
  handleToggle = () => {
    this.props.togglestate();
  }
    render(){
  return (
<nav className={`navbar navbar-expand-lg  bg-${this.props.mode}`}>
  <div className="container-fluid">
   <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`} to="/">TBP News</Link>  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`} to="/general">general</Link>  
        </li>
        <li className="nav-item">
        <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`} to="/sports">sports</Link>  
        </li>
        <li className="nav-item">
        <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`} to="/technology">technology</Link>  
        </li>
        <li className="nav-item">
        <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`} to="/business">business</Link>  
        </li>
        <li className="nav-item">
        <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`} to="/science">science</Link>  
        </li>
        <li className="nav-item">
        <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`}to="/health">health</Link>  
        </li>
        <li className="nav-item">
        <Link className={`navbar-brand text-${this.props.mode==='dark'?'light':'dark'}`} to="/entertainment">entertainment</Link>  
        </li>
        
       
       
      </ul>
      <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"  type="checkbox"  onChange={this.handleToggle} 
                checked={this.props.mode === 'dark'} role="switch" id="flexSwitchCheckDefault" style={{cursor:"pointer"}}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:this.props.mode==='dark'?'dark':'light'}}>{this.props.mode}</label>
</div>
    </div>
  </div>
</nav>

  )
    }
}
export default Navbar