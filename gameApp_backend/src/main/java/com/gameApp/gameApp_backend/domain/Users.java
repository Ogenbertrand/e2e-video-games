package com.gameApp.gameApp_backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String username;
    private String email;
    private String password;

    public Users () {}

    private Users (String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

}
