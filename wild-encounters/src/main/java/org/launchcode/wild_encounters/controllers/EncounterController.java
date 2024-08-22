package org.launchcode.wild_encounters.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.launchcode.wild_encounters.JwtService;
import org.launchcode.wild_encounters.data.EncounterRepository;
import org.launchcode.wild_encounters.data.UserRepository;
import org.launchcode.wild_encounters.models.Encounter;
import org.launchcode.wild_encounters.models.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/encounters")
@CrossOrigin(origins = "http://localhost:5173")
public class EncounterController {

    @Autowired
    private EncounterRepository encounterRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @GetMapping("/all")
    public Iterable<Encounter> getAllEncounters() {
        return encounterRepository.findAll();
    }

    @GetMapping
    public List<Encounter> getUserEncounters(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            throw new RuntimeException("Missing or invalid Authorization header");
        }

        String token = authorizationHeader.substring(7);
        String email = jwtService.extractUsername(token);

        UserInfo user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return encounterRepository.findByUserInfo(user);
    }


    @PostMapping("/add")
    public Encounter addNewEncounter(@RequestParam String animal, @RequestParam String description,
                                     @RequestParam Double latitude, @RequestParam Double longitude, HttpServletRequest request) {

        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            throw new RuntimeException("Missing or invalid Authorization header");
        }

        String token = authorizationHeader.substring(7);
        String email = jwtService.extractUsername(token);

        UserInfo user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Encounter newEncounter = new Encounter();
        newEncounter.setAnimal(animal);
        newEncounter.setDescription(description);
        newEncounter.setLatitude(latitude);
        newEncounter.setLongitude(longitude);

        newEncounter.setUserInfo(user);

        return encounterRepository.save(newEncounter);
    }

//    @PostMapping("/delete")
//    public void deleteEncounter(@RequestParam Long encounterId) {
//        encounterRepository.deleteById((encounterId));
//    }
    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteEncounter(@RequestBody Map<String, Long> payload) {
        Long encounterId = payload.get("encounterId");
        if (encounterRepository.existsById(encounterId)) {
            encounterRepository.deleteById(encounterId);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


//    @PutMapping("/edit/{id}")
//    public ResponseEntity<Encounter> editEncounter(@PathVariable Long id, @RequestBody Encounter editEncounter) {
//        return encounterRepository.findById(id)
//                .map(encounter -> {
//                    encounter.setAnimal(editEncounter.getAnimal());
//                    encounter.setDescription(editEncounter.getDescription());
//                    encounter.setLatitude(editEncounter.getLatitude());
//                    encounter.setLongitude(editEncounter.getLongitude());
//                    return ResponseEntity.ok(encounterRepository.save(encounter));
//                })
//                .orElseGet(() -> ResponseEntity.notFound().build());
//    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Encounter> editEncounter(
            @PathVariable Long id,
            @RequestParam String animal,
            @RequestParam String description,
            @RequestParam double latitude,
            @RequestParam double longitude) {

        return encounterRepository.findById(id)
                .map(encounter -> {
                    encounter.setAnimal(animal);
                    encounter.setDescription(description);
                    encounter.setLatitude(latitude);
                    encounter.setLongitude(longitude);
                    return ResponseEntity.ok(encounterRepository.save(encounter));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}

