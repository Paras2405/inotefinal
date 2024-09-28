const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
//Get all notes Route 1 GET "/api/auth/getuser".Login required
//method('endpoint',middleware,validators,function)

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes)
})

//Add new notes using post Route 2 POST "api/notes/addnote"Login required
//method('endpoint',middleware,validators,function)
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter correct description').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = await Notes.create({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag
        });
        return res.status(200).json(note)



    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }

})
//Update notes using  Route 3 PUT "api/notes/updatenote/:id" Login required
//method('endpoint',middleware,function)
const mongoose = require('mongoose');

// Update notes route
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        console.log('Invalid note id')
        return res.status(400).send("Invalid note ID");
    }

    const newNote = {};
    const { title, description, tag } = req.body;
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    let note = await Notes.findById(req.params.id);
    if (!note) {
        console.log('Note not found') 
        return res.status(404).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
        console.log('User unauthorized')
        return res.status(401).send("Unauthorized");
    }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json(note);
});

// Delete notes route
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        console.log('Invalid id')
        return res.status(400).json("Invalid note");
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
        console.log('Note not found')
        return res.status(404).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
        console.log('User unauthorized')
        return res.status(401).send("Unauthorized");
    }

    await Notes.findByIdAndDelete(req.params.id);
    console.log('Note deleted')
    res.json({ message: "Note deleted successfully" });
});

//Delete note using  Route 4 DELETE "api/notes/deletenote/:id" Login required
//method('endpoint',middleware,function)

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    //Find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id)
    if (!note) {
        console.log('Note not found')
        return res.status(404).send("Not found")
    }
    if (note.user.toString() !== req.user.id) {
        console.log('Note cannot be deleted')
        return res.status(401).send("Unauthorized")

    }

    note = await Notes.findByIdAndDelete(req.params.id)
    console.log('Note deleted')//Note deleted
})

module.exports = router