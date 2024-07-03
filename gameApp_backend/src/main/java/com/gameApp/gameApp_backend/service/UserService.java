package com.gameApp.gameApp_backend.service;

import com.gameApp.gameApp_backend.domain.Users;
import com.gameApp.gameApp_backend.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UsersRepository usersRepository;

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public Users saveUser(Users user) {
        return usersRepository.save(user);
    }

    public Users getByUsername(String username) {
        return usersRepository.findByUsername(username);
    }
}