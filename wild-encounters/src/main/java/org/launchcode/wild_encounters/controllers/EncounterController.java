package org.launchcode.wild_encounters.controllers;

import jakarta.persistence.EntityManager;
import org.launchcode.wild_encounters.data.EncounterRepository;
import org.launchcode.wild_encounters.models.Encounter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.parser.Entity;
import java.util.Optional;

@RestController
@RequestMapping("/api/encounters")
@CrossOrigin(origins = "http://localhost:5173")
public class EncounterController {

    @Autowired
    private EncounterRepository encounterRepository;


    @GetMapping
    public Iterable<Encounter> getAllEncounters() {
        return encounterRepository.findAll();
    }

    @PostMapping("/add")
    public Encounter addNewEncounter(@RequestParam String animal, @RequestParam String description,
                                     @RequestParam Double latitude, @RequestParam Double longitude) {
        Encounter newEncounter = new Encounter();
        newEncounter.setAnimal(animal);
        newEncounter.setDescription(description);
        newEncounter.setLatitude(latitude);
        newEncounter.setLongitude(longitude);
        return encounterRepository.save(newEncounter);
    }

    @PostMapping("/delete")
    public void deleteEncounter(@RequestParam Long encounterId) {
        encounterRepository.deleteById((encounterId));}


   @PutMapping("edit/{id}")
   public String updateEncounter(@PathVariable Long id, @RequestBody Encounter encounter) {
       if (encounterRepository.existsById(id)) {
           Encounter existingEncounter = encounterRepository.findById(id).orElseThrow(() ->
                   new ResponseStatusException(HttpStatus.NOT_FOUND, "Encounter not found."));
           existingEncounter.setAnimal(encounter.getAnimal());
           existingEncounter.setDescription(encounter.getDescription());
           existingEncounter.setLatitude(encounter.getLatitude());
           existingEncounter.setLongitude(encounter.getLongitude());
           encounterRepository.save(existingEncounter);
           return "Encounter updated successfully.";
       } else {
           throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Encounter not found.");
       }
    }
   }

