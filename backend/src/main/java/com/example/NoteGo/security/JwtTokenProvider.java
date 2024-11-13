package com.example.NoteGo.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

import java.util.Date;

import javax.crypto.SecretKey;

@Component
public class JwtTokenProvider {

    private final String SECRET_KEY = "your_secret_key";  // Replace with your actual secret key
    private final long VALIDITY_IN_MS = 3600000;  // 1 hour

    // Generate JWT token
    // Generate JWT token
public String generateToken(String username) {
    SecretKey secretKey = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis() + VALIDITY_IN_MS))
            .signWith(secretKey, SignatureAlgorithm.HS256)
            .compact();
}

    // Validate JWT token
    public boolean validateToken(String token) {
        try {
            getClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }


    // Extract username from token
    public String getUsernameFromToken(String token) {
        return getClaims(token).getSubject();
    }

    private Claims getClaims(String token) {
        JwtParser parser = Jwts.parserBuilder().setSigningKey(SECRET_KEY.getBytes()).build();
        return parser.parseClaimsJws(token).getBody();
    }
}
