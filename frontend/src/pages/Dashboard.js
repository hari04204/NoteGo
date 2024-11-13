// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import NoteService from "../services/NoteService";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

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

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/notes">Manage Notes</Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
