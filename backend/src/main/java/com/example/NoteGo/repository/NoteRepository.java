package com.example.NoteGo.repository;

import com.example.NoteGo.model.Note;
import com.example.NoteGo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByUser(User user);  // Fetch notes associated with a user
}
