// src/pages/NotesPage.js
import React, { useState, useEffect } from "react";
import NoteService from "../services/NoteService";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await NoteService.getAllNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };
    fetchNotes();
  }, []);

  const handleCreateNote = async () => {
    try {
      const createdNote = await NoteService.createNote(
        newNote.title,
        newNote.content
      );
      setNotes([...notes, createdNote]);
      setNewNote({ title: "", content: "" });
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await NoteService.deleteNote(noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const handleEditNote = (note) => {
    setNewNote({ title: note.title, content: note.content });
  };

  return (
    <div>
      <h2>Notes</h2>
      <div>
        <input
          type="text"
          placeholder="Note Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Note Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button onClick={handleCreateNote}>Create Note</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            <button onClick={() => handleEditNote(note)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;