/*import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
const s1={
    "name":"Harry",
    "className":"5b"

}
const [state,setState] = useState(s1)
const update=()=>{
    setTimeout(() => {
        setState({
            "name":"parry",
            "className":"8b"
        
        }) 
    }, 1000);
  
}
return(<NoteContext.Provider value={{state,update}}>
{props.children}
</NoteContext.Provider>)

}
export default NoteState*/

import noteContext from "./noteContext"
import { useState } from "react";
import Alert from "../../Alert";

const NoteState = (props) => {
  const host = 'https://technotesupgradedbackend.onrender.com/'
 //const host = 'https://inote-backend.vercel.app'
  const notesinitial = []

  
  const [notes, setNotes] = useState(notesinitial)
  //add note

  const addNote = async (title, description, tag) => {
   
    console.log('Adding note ')
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})

    })
  const json= await response.json()
    const note = {
      "_id": "66f1bba9c6df7680eeb07c02",
      "user": "66ec6f788c0532ee4a41f25d",
      "title": title,
      "description": description,
      "tag": tag,
      "__v": 0,
    }
    setNotes(notes.concat(note))
  }

  //delete note
  const deleteNote = async(id) => {
    //frontend logic
    console.log('Deleting note with id' + id)
    const newnotes = notes.filter((note) => { return note._id !== id })
    setNotes(newnotes)
     //api call
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
    

    })
  const json=await response.json()
  console.log(json)
  
  }


  //edit a note
  /*const editNote = async(_id, title, description, tag) => {
    // Update the note in client-side state
    try{
      const updatedNotes = notes.map((note) => {
        if (note._id === _id) {
            return { ...note, title, description, tag }; // Update the fields of the matching note
        }
        return note;
    });

    // Set the updated notes array back to the state (if using React)
    setNotes(updatedNotes);

    // API call to update the note on the server
    const response = await fetch(`${host}/api/notes/updatenote/${notes._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
    });

    // Await the JSON response
    const json = await response.json();
    console.log(json);

    }
    catch(err){
      console.error("An error occurred while updating the note:", err);
    }
    

    // Optionally handle the server response, e.g., show success/failure messages
};*/
//fetch notes
const getNote=async()=>{
  //api call

  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
    }


  })
  if (response.status === 401) {
    alert('Unauthorized access. Please log in again.'); // Inform user
    // Optionally, redirect to login page
    return;
}

  
  const json = await response.json()
  console.log(json)
  setNotes(json)
}


return (
  <noteContext.Provider value={{ notes, addNote, deleteNote,getNote,Alert }}>
    {props.children}
  </noteContext.Provider>
)

}
export default NoteState