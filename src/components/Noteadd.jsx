import React,{useContext,useState} from 'react'
import noteContext from './context/notes/noteContext';

const addNote = (props) => {
  const context = useContext(noteContext);
  const {addNote } = context;
  const {showAlert}=props
  const [note,setNote] = useState({title:"",description:"",tag:""})
  const handleClick=(e)=>{

    e.preventDefault()
    if(note.title==""|| note.description==""|| note.tag==""){
      showAlert("Please check out fields", "warning");
    }
    else if(note.title.length<5 ||note.description.length<5||note.tag.length<2 ){
      showAlert("Please enter Note correctly", "warning");
    }
    else{
      addNote(note.title,note.description,note.tag)
      showAlert("Note added successfully", "success");
    }

 
  }

  const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
  }

  return (

    <div className='container mx-2 my-2'>
       <h2 className='text-center'>Add Notes</h2>
      <form>
  <div className="mb-3">
    <label   htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label   htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label   htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
   
  </div>
 
  <button type="submit" className="btn btn-primary " onClick={handleClick}>Add Note</button>
</form>
    </div>
  )
}

export default addNote
