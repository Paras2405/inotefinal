import React, { useContext } from 'react';
import noteContext from './context/notes/noteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;
  const { note, showAlert } = props; // Destructure showAlert from props

  // Handle note deletion
  const handleDelete = (id) => {
    deleteNote(id);
    showAlert("Note deleted successfully", "danger"); // Trigger alert after deletion
  };

  // Handle note editing
  const handleEdit = (id) => {
    editNote(id); // Call edit function
    showAlert("Note edited successfully", "success"); // Trigger alert after editing
  };

  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={() => handleDelete(note._id)}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={() => handleEdit(note._id)}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
