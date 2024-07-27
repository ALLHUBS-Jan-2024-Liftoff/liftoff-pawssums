package org.launchcode.wild_encounters.controllers;

import org.launchcode.wild_encounters.data.EncounterRepository;
import org.launchcode.wild_encounters.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("encounter")
public class EncounterController {

    @Autowired
    private EncounterRepository encounterRepository;
//    @Autowired
//    private UserRepository userRepository;

    @GetMapping
    public String getAllEncounters(Model model) {
        model.addAttribute("encounters", encounterRepository.findAll());
        return "encounter/list";

    }

    @GetMapping("/add")
    public String showNewEncounterForm (Model model){
        model.addAttribute("encounter", new Encounter());
        return "encounter/form";
    }

    @PostMapping
    public  String saveNewEncounter(@ModelAttribute("encounter") Encounter encounter) {
        encounterRepository.save(encounter);
        return "redirect:/encounters"
    }
}
