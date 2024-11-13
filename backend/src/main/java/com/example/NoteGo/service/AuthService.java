package com.example.NoteGo.service;

import com.example.NoteGo.model.User;
import com.example.NoteGo.repository.UserRepository;
import com.example.NoteGo.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    // Register a new user
    public User register(User user) {
        return userRepository.save(user);
    }

    // Authenticate and return a JWT token
    public String login(User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return jwtTokenProvider.generateToken(user.getUsername());
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
