package org.launchcode.wild_encounters.controllers;

import org.apache.catalina.User;
import org.launchcode.wild_encounters.JwtService;
import org.launchcode.wild_encounters.data.UserRepository;
import org.launchcode.wild_encounters.models.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @GetMapping("/test")
    public ResponseEntity<String> testEndpoint() {
        return ResponseEntity.ok("API is working");
    }

    @PostMapping("/newUser")
    public ResponseEntity<?> createUser(@RequestParam String email, @RequestParam String name, @RequestParam String password) {

        if (userRepository.findByEmail(email).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }

        UserInfo newUser = new UserInfo();
        newUser.setEmail(email);
        newUser.setName(name);
        newUser.setPassword(passwordEncoder.encode(password));
        userRepository.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> requestBody) {
//        String email = requestBody.get("email");
//        String password = requestBody.get("password");
//
//        Optional<UserInfo> optionalUser = userRepository.findByEmail(email);
//        if (!optionalUser.isPresent()) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//        }
//
//        UserInfo user = optionalUser.get();
//        if (!passwordEncoder.matches(password, user.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//        }
//
//        String token = jwtService.generateToken(user);
//
//        Map<String, Object> response = new HashMap<>();
//        response.put("token", token);
//        response.put("user", user);
//        return ResponseEntity.ok(response);
//    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String password = requestBody.get("password");

        System.out.println("Login attempt with email: " + email);

        Optional<UserInfo> optionalUser = userRepository.findByEmail(email);
        if (!optionalUser.isPresent()) {
            System.out.println("User not found");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }

        UserInfo user = optionalUser.get();
        if (!passwordEncoder.matches(password, user.getPassword())) {
            System.out.println("Password does not match");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }

        String token = jwtService.generateToken(user);

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", user);
        return ResponseEntity.ok(response);
    }
}
