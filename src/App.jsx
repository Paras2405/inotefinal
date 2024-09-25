import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import './index.css'
import NoteState from './components/context/notes/NoteState';


function App(){
  return(<>

  <NoteState>
   <Router>
          <Navbar />
        
        
          <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            
          </Routes>
        </Router>
  
        </NoteState>

  </>)

}
export default App