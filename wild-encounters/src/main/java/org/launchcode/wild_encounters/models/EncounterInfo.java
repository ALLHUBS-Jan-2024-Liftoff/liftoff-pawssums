package org.launchcode.wild_encounters.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class EncounterInfo {
    @Id
    @GeneratedValue
    private Long id;

}
