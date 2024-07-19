package org.launchcode.wild_encounters.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class UserInfo {

    @Id
    @GeneratedValue
    private int id;

    private String name;

    private String email;

    public UserInfo(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public UserInfo() {
    }
}
