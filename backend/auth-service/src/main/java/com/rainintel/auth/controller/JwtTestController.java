package com.rainintel.auth.controller;

import com.rainintel.auth.security.JwtService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class JwtTestController {

    private final JwtService jwtService;

    public JwtTestController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @GetMapping("/token")
    public String generateToken(
            @RequestParam(defaultValue = "test-user") String username) {

        return jwtService.generateToken(username);
    }
}