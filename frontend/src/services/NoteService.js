// src/services/NoteService.js
const NoteService = {
  getAllNotes: async () => {
    const response = await fetch('/api/notes');
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }
    return await response.json();
  },
  createNote: async (title, content) => {
    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) {
      throw new Error('Failed to create note');
    }
    return await response.json();
  },
  deleteNote: async (noteId) => {
    const response = await fetch(`/api/notes/${noteId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete note');
    }
  },
};

export default NoteService;