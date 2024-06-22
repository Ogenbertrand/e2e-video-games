package com.gameApp.gameApp_backend.controller;

import com.gameApp.gameApp_backend.domain.Users;
import com.gameApp.gameApp_backend.repository.UsersRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UsersController {
    private final UsersRepository usersRepository;

    public UsersController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @GetMapping("/users")
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }

    @PostMapping("/users")
    public Users createUser(@RequestBody Users user) {
        return this.usersRepository.save(user);
    }
}
