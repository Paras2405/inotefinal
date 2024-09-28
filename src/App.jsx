import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './index.css'
import NoteState from './components/context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';


function App(){
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: '', type: '' }); // Clear alert after 3 seconds
    }, 3000);
  };
 
  return(<>

  <NoteState>

   <Router>
          <Navbar />
           <Alert alert={alert}></Alert>
        
          <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/Home" element={<Home showAlert={showAlert}/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login showAlert={showAlert}/>} />
            <Route path="/Signup" element={<SignUp showAlert={showAlert}/>} />
            
          </Routes>
        </Router>
  
        </NoteState>

  </>)

}
export default App