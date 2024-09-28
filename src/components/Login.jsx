import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';




const Login = ({showAlert}) => {
   
    const navigate = useNavigate();
    const [credentials,setCredentials] = useState({email:"",password:""})
    const handleSubmit=async(e)=>{

        e.preventDefault()
        const response = await fetch(`http://localhost:3000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
  
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
      
          })
        const json= await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authtoken)
            showAlert("User Logged In Successfully","success")
             navigate('/Home')
          
        }
      else{
        showAlert("Invalid Credentials","danger")
      }
         
    }
    const onChange=(e)=>{
   setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div className='container my-2'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
