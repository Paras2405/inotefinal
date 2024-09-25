import React, { useContext, useEffect, useState } from 'react';
import noteContext from './context/notes/noteContext';
import Noteadd from './Noteadd';
import Noteitem from './Noteitem';
import Alert from './Alert'; // Import the Alert component

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote } = context;

  const [alert, setAlert] = useState({ message: 'Welcome to inotebook', type: 'primary' }); // State for alert message and type



  // Function to trigger alert
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: '', type: '' }); // Clear alert after 3 seconds
    }, 3000);
  };
  useEffect(() => {
    getNote();
  }, []);
  return (
    <>
      <Alert message={alert.message} type={alert.type} /> {/* Pass alert props */}
      <Noteadd showAlert={showAlert} />
      <div className="container row mx-2 my-3">
        <h2 className="text-center">Your Notes</h2>
        {notes.map((note) => (
          <Noteitem note={note} key={note._id} showAlert={showAlert} />
        ))}
      </div>
    </>
  );
};

export default Notes;
