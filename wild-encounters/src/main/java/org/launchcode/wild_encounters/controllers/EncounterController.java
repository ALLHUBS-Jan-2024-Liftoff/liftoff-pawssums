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

    @GetMapping
    public Iterable<Encounter> getAllEncounters() {
        return encounterRepository.findAll();
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

    @PostMapping("/delete")
    public void deleteEncounter(@RequestParam Long encounterId) {
        encounterRepository.deleteById((encounterId));
    }


    @PutMapping("/edit/{id}")
    public ResponseEntity<Encounter> editEncounter(@PathVariable Long id, @RequestBody Encounter editEncounter) {
        return encounterRepository.findById(id)
                .map(encounter -> {
                    encounter.setAnimal(editEncounter.getAnimal());
                    encounter.setDescription(editEncounter.getDescription());
                    encounter.setLatitude(editEncounter.getLatitude());
                    encounter.setLongitude(editEncounter.getLongitude());
                    return ResponseEntity.ok(encounterRepository.save(encounter));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}

//    public Encounter editEncounter(
//            @PathVariable Long id,
//            @RequestBody Encounter encounterDetails) {
//        Optional<Encounter> existingEncounter = encounterRepository.findById(id);
//        if (existingEncounter.isPresent()) {
//            Encounter encounter = existingEncounter.get();
//            encounter.setAnimal(encounterDetails.getAnimal());
//            encounter.setDescription(encounterDetails.getDescription());
//            encounter.setLatitude(encounterDetails.getLatitude());
//            encounter.setLongitude(encounterDetails.getLongitude());
//            return encounterRepository.save(encounter);
//        } else {
//            return null;
//        }
//    }
//}
//


//public String updateEncounter(@PathVariable Long id, @RequestBody Encounter encounter) {
//       if (encounterRepository.existsById(id)) {
//           Encounter existingEncounter = encounterRepository.findById(id).orElseThrow(() ->
//                   new ResponseStatusException(HttpStatus.NOT_FOUND, "Encounter not found."));
//           existingEncounter.setAnimal(encounter.getAnimal());
//           existingEncounter.setDescription(encounter.getDescription());
//           existingEncounter.setLatitude(encounter.getLatitude());
//           existingEncounter.setLongitude(encounter.getLongitude());
//           encounterRepository.save(existingEncounter);
//           return "Encounter updated successfully.";
//       } else {
//           throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Encounter not found.");
//       }
//    }

