import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from './context/notes/noteContext';
import Noteadd from './Noteadd';
import Noteitem from './Noteitem';


const Notes = ({showAlert}) => {
  const navigate=useNavigate()
  const context = useContext(noteContext);
  const { notes, getNote, } = context;


 // State for alert message and type
 // const [note,setNote] = useState({etitle:"",edescription:"",etag:""})
 // const ref = useRef(null)
  //const refClose = useRef(null)
  /*const updateNote = (currentNote) => {
    ref.current.click()
    setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }*/

  /*const handleClick=(e)=>{
    console.log('Note updated',note)

    refClose.current.click()
 
  showAlert("Note added successfully", "warning");
  }*/

 /* const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
  }*/



  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/Home')
      getNote();
    
    }
   else{
    navigate('/Login')
   }
   
   
   
  }, []);
  return (
    <>
       {/* Pass alert props */}
      <Noteadd showAlert={showAlert} />

      {/*<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />

              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">description</label>
                <input type="text" className="form-control" id="edescription" name="edescription"  value={note.edescription}onChange={onChange} />

              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">tag</label>
                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />

              </div>

            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>*/}
      <div className="container row mx-2 my-3">
        <h2 className="text-center">Your Notes</h2>
        {notes.map((note) => (
          <Noteitem note={note} key={note._id}  showAlert={showAlert} />
        ))}
      </div>
    </>
  );
};

export default Notes;
