/*import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
const s1={
    "name":"Harry",
    "class":"5b"

}
const [state,setState] = useState(s1)
const update=()=>{
    setTimeout(() => {
        setState({
            "name":"parry",
            "class":"8b"
        
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

const NoteState = (props) => {
  const host = 'http://localhost:3000'
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
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWM2Zjc4OGMwNTMyZWU0YTQxZjI1YyIsImlhdCI6MTcyNjc3MTEwNn0.v6mYF8XcA8NtR1VkTn2aEc3QqrQp5SPAXtTy21bAM78'
      },
      body: JSON.stringify({title,description,tag})

    })
  const json=response.json()
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
  const deleteNote = (id) => {
    console.log('Deleting note with id' + id)
    const newnotes = notes.filter((note) => { return note._id !== id })
    setNotes(newnotes)
  }


  //edit a note
  const editNote = async (id, title, description, tag) => {
    //logic to edit in client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element.title = title
      element.description = description
      element.tag = tag

    }

  }
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${notes._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWM2Zjc4OGMwNTMyZWU0YTQxZjI1YyIsImlhdCI6MTcyNjc3MTEwNn0.v6mYF8XcA8NtR1VkTn2aEc3QqrQp5SPAXtTy21bAM78'
      },
      body: JSON.stringify({title,description,tag})

    })
  const json=response.json()
  

}
//fetch notes
const getNote=async()=>{
  //api call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWM2Zjc4OGMwNTMyZWU0YTQxZjI1YyIsImlhdCI6MTcyNjc3MTEwNn0.v6mYF8XcA8NtR1VkTn2aEc3QqrQp5SPAXtTy21bAM78'
    }


  })
  const json = await response.json()
  console.log(json)
  setNotes(json)
}


return (
  <noteContext.Provider value={{ notes, addNote, deleteNote,editNote,getNote }}>
    {props.children}
  </noteContext.Provider>
)

}
export default NoteState