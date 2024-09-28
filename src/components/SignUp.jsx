import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const navigate = useNavigate();
    const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    const handleSubmit=async(e)=>{

        e.preventDefault()
        const {name,email,password}=credentials
        const response = await fetch(`http://localhost:3000/api/auth/createuser`, {
           
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
  
            },
            body: JSON.stringify({name,email,password})
      
          })
        const json= await response.json()
        console.log(json)
        if(json.success){
         
            props.showAlert('Account Created successfully','success')
            localStorage.setItem('token',json.authtoken)
           navigate('/Home')
        
        }
        if(credentials.password !== credentials.cpassword){
            props.showAlert('Passwords do not match', 'danger');
            navigate('/SignUp')
        }
        else if (json.error === "User already exists") {
            props.showAlert('User already exists', 'warning');
            navigate('/SignUp')
        }
    
         
    }
    const onChange=(e)=>{
   setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    
    <div className='container my-2'>
      <form onSubmit={handleSubmit}
      
    >
  <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange}/>

    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" minLength={5} required onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
   
  )
}

export default SignUp
