package org.launchcode.wild_encounters.controllers;

import org.launchcode.wild_encounters.data.EncounterRepository;
import org.launchcode.wild_encounters.models.Encounter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
    public Encounter addNewEncounter(@RequestParam String animal, @RequestParam String description){
        Encounter newEncounter = new Encounter();
        newEncounter.setAnimal(animal);
        newEncounter.setDescription(description);
        return encounterRepository.save(newEncounter);
    }

    @PostMapping("/delete")
    public void deleteEncounter(@RequestParam Long encounterId){
        encounterRepository.deleteById((encounterId));


//    public String deleteEncounter(@PathVariable("id") Long id){
//        encounterRepository.deleteById(id);
//        return "redirect:/encounters";
    }

    @PutMapping("/edit")
    public Encounter editEncounter(@RequestParam Long encounterId, @RequestParam String animal, @RequestParam String description) {
        Encounter encounter = new Encounter();
        encounter.setAnimal(animal);
        encounter.setDescription(description);
        return encounterRepository.save(encounter);
    }
//    public String editEncounter(@PathVariable("id") Long id, Model model){
//        model.addAttribute("encounter", encounterRepository.findById(id));
//        return "encounter/add";
    }

