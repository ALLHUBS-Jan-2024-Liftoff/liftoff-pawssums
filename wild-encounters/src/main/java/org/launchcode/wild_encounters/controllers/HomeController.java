package org.launchcode.wild_encounters.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("wild")
    public String home(){
        return "home";
    }
}
