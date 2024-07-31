package org.launchcode.wild_encounters.controllers;

import org.launchcode.wild_encounters.data.EncounterRepository;
import org.launchcode.wild_encounters.data.UserRepository;
import org.launchcode.wild_encounters.models.Encounter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class EncounterController {

    @Autowired
    private EncounterRepository encounterRepository;
//    @Autowired
//    private UserRepository userRepository;

    @GetMapping("/encounters")
    public Iterable<Encounter> getAllEncounters() {
        return encounterRepository.findAll();
    }
//    public String getAllEncounters(Model model) {
//        model.addAttribute("encounters", encounterRepository.findAll());
//        return "encounter/list";
//
//    }


//    @GetMapping("add")
//    public String showNewEncounterForm (Model model){
//        model.addAttribute("encounter", new Encounter());
//        return "encounter/add";
//    }

    @PostMapping("/encounters/add")
    public Encounter saveNewEncounter(@RequestBody Encounter encounter){
        return encounterRepository.save(encounter);
    }

//    public  String saveNewEncounter(@ModelAttribute("encounter") Encounter encounter) {
//        encounterRepository.save(encounter);
//        return "redirect:/encounters";
//    }

    @PostMapping("delete/{id}")
    public String deleteEncounter(@PathVariable("id") Long id){
        encounterRepository.deleteById(id);
        return "redirect:/encounters";
    }

    @GetMapping("edit/{id}")
    public String editEncounter(@PathVariable("id") Long id, Model model){
        model.addAttribute("encounter", encounterRepository.findById(id));
        return "encounter/add";
    }

}
