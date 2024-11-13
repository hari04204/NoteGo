package com.example.NoteGo.controller;

import com.example.NoteGo.model.Note;
import com.example.NoteGo.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/{userId}")
    public List<Note> getAllNotes(@PathVariable Long userId) {
        return noteService.getAllNotes(userId);
    }

    @PostMapping("/{userId}")
    public ResponseEntity<Note> createNote(@PathVariable Long userId, @RequestBody Note note) {
        return ResponseEntity.ok(noteService.createNote(userId, note));
    }

    @PutMapping("/{noteId}")
    public ResponseEntity<Note> updateNote(@PathVariable Long noteId, @RequestBody Note noteDetails) {
        return ResponseEntity.ok(noteService.updateNote(noteId, noteDetails));
    }

    @DeleteMapping("/{noteId}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long noteId) {
        noteService.deleteNote(noteId);
        return ResponseEntity.noContent().build();
    }
}
