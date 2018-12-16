package org.CarRental.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "app_user")
@Getter
@Setter
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username", unique = true, nullable = false)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "authorities")
    private String authorities;

    public AppUser() {
    }

    public AppUser(String username, String password, String authorities) {
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }


}